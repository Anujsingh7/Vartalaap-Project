import { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase";
import ShowNotes from "../components/ShowNotes";
import '../assets/style.css'


const Notes = () => {
  const firebase = useFirebase();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    firebase.listAllNotes().then((noteSnapshot) => {
      // Extract data from each document
      const extractedNotes = noteSnapshot.docs.map(doc => doc.data());
      setNotes(extractedNotes);
    }).catch(error => {
      console.error("Error fetching notes:", error);
    });
  }, []);
  console.log("nodsfi");
  if (notes) console.log(notes);

  return (
    <>
      <ShowNotes MenuData={notes}/>
    </>
  );
};

export default Notes;
