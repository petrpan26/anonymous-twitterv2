const { Firestore } = require("@google-cloud/firestore");

const firestore = new Firestore();

function processSnapshot(response) {
  return (snapshot) => {
    let lastId =
      snapshot.docs.length == 0
        ? null
        : snapshot.docs[snapshot.docs.length - 1].id;
    response.status(200).send({
      result: snapshot.docs.map((doc) => {
        result = doc.data();
        result.id = doc.id;
        return result;
      }),
      cursor: lastId,
    });
  };
}

exports.create = (request, response) => {
  const tag = request.body.tag;
  const content = request.body.content;
  const postsCol = firestore.collection("tags").doc(tag).collection("posts");
  postsCol
    .add({
      content: content,
      created_at: new Date(),
      like_count: 0,
    })
    .catch((error) => {
      console.log(error);
      response.status(500).send(error);
    })
    .then((data) => {
      response.status(200).send("OK");
    });
};

exports.fetch = (request, response) => {
  const tag = request.body.tag;
  const cursorId = request.body.cursor;
  const limit = request.body.limit || 1;
  const tagDoc = firestore.collection("tags").doc(tag);
  if (cursorId == null) {
    tagDoc
      .collection("posts")
      .orderBy("created_at")
      .limit(limit)
      .get()
      .then(processSnapshot(response))
      .catch((error) => {
        console.log("Get cursor error: " + error);
        response.status(500).send(error);
      });
    return;
  }
  const cursorDoc = tagDoc.collection("posts").doc(cursorId);
  cursorDoc
    .get()
    .then((cursor) => {
      tagDoc
        .collection("posts")
        .orderBy("created_at")
        .startAfter(cursor)
        .limit(limit)
        .get()
        .then(processSnapshot(response))
        .catch((error) => {
          console.log("Fetch error: " + error);
          response.status(500).send(error);
        });
    })
    .catch((error) => {
      console.log("Get cursor error: " + error);
      response.status(500).send(error);
    });
};

exports.test = (request, response) => {
  response.status(200).send("OK");
  return "OK";
};
