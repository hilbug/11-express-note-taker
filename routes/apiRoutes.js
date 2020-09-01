// DEPENDENCIES
// Routing
const express = require("express");
const apiRouter = express.Router();
// file-system
const fs = require("fs");

//GET
// Read the `db.json` file and return all saved notes as JSON.
apiRouter.get("/api/notes", function (req, res) {
    console.log("testing the api router");

    //const noteTitle = req.fields.title;
    //const noteText = req.fields.text;

    fs.readFile('./db/db.json', 'utf8', function (error, file) {
        if (error) throw error;
        //string?
        //return res.json(file);
        // array?
        const parsedFile = JSON.parse(file);
        return res.send(parsedFile);
    });
});

// Render individual notes??
// Doesn't work
/*apiRouter.get("/api/notes/:noteId", function(req, res) {
    const noteId = req.params.noteID;
    fs.readFile(__dirname + '/db/db.json', function (error, file) {
        const parsedFile = JSON.parse(file);
        const noteContent = parsedFile[noteId];
        res.render('post', { note: noteContent });
    });
});
*/

//POST
// receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
apiRouter.post("/api/notes", function (req, res) {
    // read file first and parse it! 
    // then, push new note to it?
    // then write the stringified version?? or something else?

    let note = req.body;

    note["id"] = Date.now();
    note["title"] = req.body.title;
    note["text"] = req.body.text;
    
    // convert data to text before writing it - use stringify
    //let stringNewNote = JSON.stringify(note);
    console.log(note);

    // string to convert into an object - use parse
    fs.readFile('./db/db.json', 'utf8', function (error, file) {
        if (error) throw error;

        // parse db.json into a JSON object
        const parsedFile = JSON.parse(file);
        console.log(parsedFile);
        // push the new note onto the JSON object
        parsedFile.push(note);
        console.log(parsedFile);

        // Create new stringify of the combined file to write back to file
        const newStringifiedFile = JSON.stringify(parsedFile);
        console.log(newStringifiedFile);
    
        // re-write the file as the combined file
        fs.writeFile('./db/db.json', newStringifiedFile, 'utf8', (err) => {
            if (err) throw err;
            console.log("The new note was appended to the file!");
        });
    });

    

    // fs.readFile(req, 'utf8', function(error, file) {
    //     if (error) {
    //         console.log("Sorry, but the system was unable to write your file, please try again later.");
    //     }
        
    //     // unique identifier for note - using Date.now()
        

        // append file?
        //fs.appendFile(newNote, __dirname + '/db/db.json');
        
    //});
    
});


//DELETE
//receive a query parameter containing the id of a note to delete.
// In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
//apiRouter.delete();

module.exports = apiRouter;

// References
// https://expressjs.com/en/guide/routing.html