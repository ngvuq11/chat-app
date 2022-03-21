import React from 'react';
import { db } from '../firebase/config';

export const useFireStore = (collection, condition) => {
  const [docs, setDocs] = React.useState([]);

  React.useEffect(() => {
    let collectionRef = db.collection(collection).orderBy('createdAt');

    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }

      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }
    const unSubcribed = collectionRef.onSnapshot((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }));
      setDocs(docs);
    });
    return unSubcribed;
  }, [collection, condition]);
  return docs;
};
