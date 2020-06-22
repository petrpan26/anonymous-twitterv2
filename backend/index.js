const { Firestore } = require("@google-cloud/firestore");
const cors = require("cors")({
  origin: true,
  credentials: true,
});

const firestore = new Firestore();
const END_CURSOR = "END_CURSOR";

function processSnapshot(response) {
  return (snapshot) => {
    let lastId =
      snapshot.docs.length == 0
        ? END_CURSOR
        : snapshot.docs[snapshot.docs.length - 1].id;
    response.status(200).send({
      result: snapshot.docs.map((doc) => doc.data()),
      cursor: lastId,
    });
  };
}

exports.create = (request, response) => {
  return cors(request, response, async () => {
    const tag = request.body.tag;
    const content = request.body.content;
    const storiesCol = firestore
      .collection("tags")
      .doc(tag)
      .collection("stories");
    storiesCol
      .add({
        content: content,
        created_at: new Date(),
        like_count: 0,
        tag: tag,
      })
      .catch((error) => {
        console.log(error);
        response.status(500).send(error);
      })
      .then((data) => {
        response.status(200).send("OK");
      });
  });
};

exports.fetch = async (request, response) => {
  return cors(request, response, async () => {
    const tag = request.body.tag;
    const cursorId = request.body.cursor;
    const limit = request.body.limit || 1;
    if (cursorId == END_CURSOR) {
      return {
        stories: [],
        cursor: END_CURSOR,
      };
    }
    var queryBuilder = firestore;
    if (tag == null) {
      queryBuilder = queryBuilder.collectionGroup("stories");
    } else {
      queryBuilder = queryBuilder
        .collection("tags")
        .doc(tag)
        .collection("stories");
    }

    queryBuilder = queryBuilder.orderBy("created_at");

    if (cursorId != null) {
      const cursor = await tagDoc.collection("stories").doc(cursorId);
      queryBuilder = queryBuilder.startAfter(cursor);
    }

    queryBuilder
      .limit(limit)
      .get()
      .then(processSnapshot(response))
      .catch((error) => {
        console.log("Fetch error: " + error);
        response.status(500).send(error);
      });
  });
};

exports.test = (request, response) => {
  return cors(req, res, () => {
    response.status(200).send("OK");
    return "OK";
  });
};
