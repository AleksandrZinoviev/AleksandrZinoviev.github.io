async function files(){
    let [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();
    console.log(fileData.lastModified);
}

async function direct(){
    let [dirHandle] = await window.window.showDirectoryPicker();
    let dirData = await dirHandle.getDirectory();
    console.log(dirData.lastModified);
}