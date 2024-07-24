import List "mo:base/List";
import Text "mo:base/Text";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

type Note = {
  title: Text;
  content: Text;
};

actor NoteBee {
  let owner : Principal = Principal.fromText("vio7g-fm4hn-gnnk5-eav6k-352rg-tadp7-u6msk-xz2c6-pkmwq-2wwbr-gqe");
  
  var notes: List.List<Note> = List.nil<Note>();
  var noteUser = HashMap.HashMap<Principal, List.List<Note>>(1, Principal.equal, Principal.hash);
  noteUser.put(owner, notes);
// 
// 
// 
  public query func noteOf(who: Principal): async [Note] {
    let rNote: List.List<Note> = switch (noteUser.get(who)) {
      case null List.nil<Note>();
      case (?result) result;
    };

    return List.toArray(rNote);
  };

  public shared(msg) func addNoteAut(titleText: Text, contentText: Text) : async Text {
    Debug.print(debug_show(msg.caller));
    let callerPrincipal = msg.caller;

    let newNote: Note = {
      title = titleText;
      content = contentText;
    };

    let tempNote: List.List<Note> = switch (noteUser.get(callerPrincipal)) {
      case null List.nil<Note>();
      case (?result) result;
    };

    let updatedNotes = List.push(newNote, tempNote);

    noteUser.put(callerPrincipal, updatedNotes);

    return "New note added successfully!";
  };


  public shared(msg) func deleteNote(id: Nat) : async Text{
    let callerPrincipal = msg.caller;

    let tempNote: List.List<Note> = switch (noteUser.get(callerPrincipal)) {
      case null List.nil<Note>();
      case (?result) result;
    };

    let front = List.take(tempNote, id);
    let back = List.drop(tempNote, id + 1);

    let updatedNotes = List.append(front, back);
    noteUser.put(callerPrincipal, updatedNotes);

    return "Delete note successfully!";
  };

  public shared(msg) func updateNote(index: Nat, titleText: Text, contentText: Text) : async Text {
    let callerPrincipal = msg.caller;

    let updatedNote: Note = {
        title = titleText;
        content = contentText;
    };

    let tempNote: List.List<Note> = switch (noteUser.get(callerPrincipal)) {
      case null List.nil<Note>();
      case (?result) result;
    };

    // Cập nhật Note tại vị trí index
    let front = List.take(tempNote, index);
    let back = List.drop(tempNote, index + 1);
    
    let updatedNotes = List.append(front, back);


    noteUser.put(callerPrincipal, updatedNotes);

    return "Note updated successfully!";
  };

  // public func updateNote(id: Nat, titleText: Text, contentText: Text){
  //   let newNote: Note = {
  //     title = titleText;
  //     content = contentText;
  //   };
  //   notes.put(id, newNote);
  // }
}

  // public func createNote(titleText: Text, contentText: Text) {
  //   let newNote: Note = {
  //     title = titleText;
  //     content = contentText;
  //   };

  //   notes := List.push(newNote, notes);
  //   Debug.print(debug_show(notes));
  // };

  // public query func readNotes(): async [Note] {
  //     return List.toArray(notes);
  // };

