(function (thisObj) {// ----- EXTENDSCRIPT INCLUDES ------ //"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();// ---------------------------------- //// ----- EXTENDSCRIPT PONYFILLS -----function __objectFreeze(obj) { return obj; }// ---------------------------------- //var config = {
  id: "com.axwt.effectsflow"};

var ns = config.id;

// Bundle manifest (encrypted at bundle zip root)

/**
 * @function dispatchTS Displatches an event to the CEP panel with Type-Safety
 * See listenTS() in the CEP panel for more info
 * @param event The event name to listen for (defined in EventTS in shared/universals.ts)
 * @param callback The callback function to be executed when the event is triggered
 */
var dispatchTS = function dispatchTS(event, data) {
  if (new ExternalObject("lib:PlugPlugExternalObject")) {
    var eventObj = new CSXSEvent();
    eventObj.type = "".concat(ns, ".").concat(event);
    eventObj.data = JSON.stringify(data);
    eventObj.dispatch();
  }
};
var indexOf = function indexOf(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (element === value) {
      return i;
    }
  }
  return -1;
};

var createLogger = function createLogger(level) {
  return function (message) {
    if (level === "debug" && true) return;
    dispatchTS("log", {
      message: "[JSX]: ".concat(message),
      level: level
    });
  };
};
var infoLogger = createLogger("info");
var warnLogger = createLogger("warn");
var errorLogger = createLogger("error");
var debugLogger = createLogger("debug");
infoLogger.info = infoLogger;
infoLogger.warn = warnLogger;
infoLogger.error = errorLogger;
infoLogger.debug = debugLogger;
var log = infoLogger;

// Setting this to global variable, that we wouldn't need
// to parse all project structure each time we import the file.
// This improves the performance of the import process
var IMPORT_FOLDER_NAME$1 = "Dominate Videos";
var IMPORT_FOLDER$1 = null;
function getCreateImportFolder() {
  log.info('Getting import folder');
  try {
    if (!IMPORT_FOLDER$1) {
      log.info('Import folder not found, will create new one');
    } else if (!Object.isValid(IMPORT_FOLDER$1)) {
      log.info('Import folder invalid, will recreate');
      IMPORT_FOLDER$1 = null;
    } else {
      log.info('Import folder found, will use cached one');
      return IMPORT_FOLDER$1;
    }
  } catch (err) {
    log.error('Cached import folder invalid, will recreate: ' + String(err));
    IMPORT_FOLDER$1 = null;
  }
  try {
    var allItems = app.project.rootFolder.items.length;
    log.info('Finding import folder: ' + allItems);

    // Find the folder if it exists
    for (var i = 1; i <= allItems; i++) {
      var curItem = app.project.rootFolder.items[i];
      if (curItem instanceof FolderItem && curItem.name === IMPORT_FOLDER_NAME$1) {
        IMPORT_FOLDER$1 = curItem;
        return IMPORT_FOLDER$1;
      }
    }
  } catch (err) {
    log.error('Error while finding import folder: ' + String(err));
  }
  log.info('Import folder not found, creating new one');
  try {
    // Create a new folder if it doesn't exist
    IMPORT_FOLDER$1 = app.project.items.addFolder(IMPORT_FOLDER_NAME$1);
    IMPORT_FOLDER$1.label = 0;
  } catch (err) {
    log.error('Failed to create import folder: ' + String(err));
    throw err;
  }
  return IMPORT_FOLDER$1;
}
function findCompByName(importedProjectFolder, compName, movetoFolder) {
  var compToImport = null;

  // Recursively find the comp by name
  findMogrtComp(importedProjectFolder);
  function findMogrtComp(projFolder) {
    for (var f = 1; f <= projFolder.items.length; f++) {
      if (compToImport) break;
      var item = projFolder.items[f];
      if (item instanceof FolderItem && !compToImport) {
        findMogrtComp(item);
      } else if (item instanceof CompItem && item.name == compName) {
        compToImport = item;
        return true;
      }
    }
    return false;
  }
  if (compToImport) {
    app.project.showWindow(true);
    getCreateImportFolder();
    if (IMPORT_FOLDER$1) {
      importedProjectFolder.parentFolder = IMPORT_FOLDER$1;
      compToImport.parentFolder = IMPORT_FOLDER$1;
    }
    return compToImport;
  }
  return null;
}
function compositionIsOpened() {
  return getActiveComp() !== null;
}
function getActiveComp() {
  if (app.activeViewer) app.activeViewer.setActive();
  if (app.project.activeItem && app.project.activeItem instanceof CompItem) {
    return app.project.activeItem;
  }
  return null;
}
function importFile$1(asset) {
  log.info('Importing file: ' + JSON.stringify(asset));
  var path = asset.path,
    type = asset.type;
    asset.name;
  var mogrtCompName = asset.mogrtCompName || "";
  var activeComp = getActiveComp();
  if (!activeComp) {
    log.error('No active comp');
    return {
      success: false,
      error: 'Please, open a composition before importing'
    };
  }

  // Set "Project" panel active
  // app.project.showWindow(true);

  try {
    getCreateImportFolder();
  } catch (err) {
    log.error('Error while getting import folder: ' + err.toString());
    return {
      success: false,
      error: 'Error while getting import folder: ' + err.toString()
    };
  }
  if (type == "AEP" || type == "MOGRT") {
    while (app.project.selection.length) app.project.selection[0].selected = false;
    app.beginSuppressDialogs();
    var importedFile = null;
    try {
      var importOpts = new ImportOptions(new File(path));
      importedFile = app.project.importFile(importOpts);
    } catch (e) {
      app.endSuppressDialogs(true);
      log.error('Error while importing file: ' + e.toString());
      return {
        success: false,
        error: 'Error while importing file: ' + e.toString()
      };
    }

    // in case if file is double encrypted or damaged
    if (importedFile === null) {
      app.endSuppressDialogs(true);
      return {
        success: false,
        error: 'Failed to import the file: ' + importedFile
      };
    } else {
      app.endSuppressDialogs(false);
    }

    // Get the imported project folder - importedFile should be the root folder of the imported project
    var importedProject = null;
    if (importedFile instanceof FolderItem) {
      importedProject = importedFile;
    } else {
      // Fallback: try to get from selection if available
      if (app.project.selection.length > 0) {
        var selectedItem = app.project.selection[app.project.selection.length - 1];
        if (selectedItem instanceof FolderItem) {
          importedProject = selectedItem;
        }
      }
    }
    if (!importedProject) {
      app.endSuppressDialogs(true);
      return {
        success: false,
        error: 'Failed to locate imported project folder'
      };
    }
    importedProject.parentFolder = IMPORT_FOLDER$1;
    var importedComp = findCompByName(importedProject, mogrtCompName);
    if (!importedComp) {
      return {
        success: false,
        error: 'Failed to find comp: ' + mogrtCompName
      };
    }
    app.beginUndoGroup("Import project");

    // copy precomp to our active composition
    var copiedComp = activeComp.layers.add(importedComp);
    var IMPORT_TO_CTI = true;
    copiedComp.startTime = IMPORT_TO_CTI ? activeComp.time : 0;
    fitToCompSize(copiedComp, activeComp);
    app.endUndoGroup();
    if (app.activeViewer != null) app.activeViewer.setActive();

    // open EGP if MOGRT was imported

    if (mogrtCompName) {
      try {
        importedComp.openInEssentialGraphics();
      } catch (e) {}
    }
  } else if (type == "FFX") {
    app.beginUndoGroup("Apply preset");
    var selectedLayers = activeComp.selectedLayers;
    for (var l = 0; l < selectedLayers.length; l++) {
      try {
        selectedLayers[l].applyPreset(new File(path));
      } catch (e) {
        // in case if Camera layer or other unsupported layer types
      }
    }
    app.endUndoGroup();
  } else if (type == "VIDEO" || type == "AUDIO") {
    var importOptions = new ImportOptions();
    var importedFootage = null;
    var _selectedLayers = activeComp.selectedLayers;

    // import footage
    app.beginUndoGroup("Import file");
    try {
      importOptions.file = new File(path);
      importedFootage = app.project.importFile(importOptions);
    } catch (e) {
      app.endUndoGroup();
      log.error("Error while importing file: ".concat(e.toString()));
      return {
        success: false,
        error: "Error while importing file: ".concat(e.toString())
      };
    }
    importedFootage.parentFolder = IMPORT_FOLDER$1;
    var footageLayer = activeComp.layers.add(importedFootage);
    if (_selectedLayers.length) footageLayer.moveBefore(_selectedLayers[_selectedLayers.length - 1]);
    footageLayer.startTime = activeComp.time;
    app.endUndoGroup();

    // "New Comp from Selection..." command
    // app.executeCommand(2796);

    return {
      success: true,
      error: ''
    };
  }

  // restore selected comp
  while (app.project.selection.length) app.project.selection[0].selected = false;
  if (activeComp && activeComp instanceof CompItem) activeComp.selected = true;
  return {
    success: true,
    error: ''
  };
}
function fitToCompSize(layer, comp) {
  var layerSize = [layer.source.width, layer.source.height];
  var sizeFactor = layerSize[0] > layerSize[1] ? layerSize[0] : layerSize[1];
  var compFactor = layerSize[0] > layerSize[1] ? comp.width : comp.height;
  var newScale = compFactor / (sizeFactor / 100);
  layer.transform.scale.setValue([newScale, newScale]);
}

var isSecurityPrefSet = function isSecurityPrefSet() {
  try {
    var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
    return securitySetting == 1;
  } catch (e) {
    return securitySetting = 1;
  }
};
var checkSecurityPrefSet = function checkSecurityPrefSet() {
  if (!isSecurityPrefSet()) {
    if (parseFloat(app.version) >= 16.1) ;
    if (!isSecurityPrefSet()) return false;
  }
  return true;
};
var openSecurityPreferences = function openSecurityPreferences() {
  if (parseFloat(app.version) >= 16.1) {
    app.executeCommand(3131);
  } else {
    app.executeCommand(2359);
  }
};

var aeft = /*#__PURE__*/__objectFreeze({
    __proto__: null,
    checkSecurityPrefSet: checkSecurityPrefSet,
    compositionIsOpened: compositionIsOpened,
    importFile: importFile$1,
    openSecurityPreferences: openSecurityPreferences
});

// Setting this to global variable, that we wouldn't need
// to parse all project structure each time we import the file.
// This improves the performance of the import process
var IMPORT_FOLDER_NAME = "Dominate Videos";
var IMPORT_FOLDER = null;
function setImportBin() {
  IMPORT_FOLDER = findBin(app.project.rootItem, IMPORT_FOLDER_NAME);
  return IMPORT_FOLDER;
}
function importFile(asset) {
  log.info('-----------Importing file: ' + JSON.stringify(asset, null, 2));
  var path = asset.path,
    type = asset.type,
    durationSeconds = asset.durationSeconds;
  var hasAudio = asset.hasAudio || false;
  var hasVideo = true;
  log.info("Get project");
  var proj = app.project;
  var originalBin = null;
  log.info("Get active sequence");
  if (!app.project.activeSequence) {
    log.error("No sequence opened");
    return {
      success: false,
      error: "No sequence opened"
    };
  }
  log.info("Set import bin");
  try {
    var _qe;
    log.info('Get bin');
    var importBin = setImportBin();
    if (!importBin) importBin = app.project.rootItem;
    log.info("Original bin: " + String(importBin.name));
    originalBin = importBin;
    if (importBin.type === ProjectItemType.BIN) {
      log.info('Import bin name: "' + String(importBin.name) + '"');
    }
    log.info('Enable QE');
    app.enableQE();
    var qeSeq = (_qe = qe) === null || _qe === void 0 ? void 0 : _qe.project.getActiveSequence();
    var seq = proj.activeSequence;
    var videoTracks = proj.activeSequence.videoTracks;
    var audioTracks = proj.activeSequence.audioTracks;
    var currentTime = proj.activeSequence.getPlayerPosition().ticks;
    if (type === "MOGRT") {
      var mogrtTime = new Time();
      mogrtTime.seconds = durationSeconds || 0;
      var itemDuration = {
        start: Number(currentTime),
        end: Number(currentTime) + Number(mogrtTime.ticks)
      };
      var seqDimensions = [proj.activeSequence.frameSizeHorizontal, proj.activeSequence.frameSizeVertical];

      // get audio and video tracks indexes first, then insert the clip

      var importData = findPlaceToInsertClip(itemDuration, proj.activeSequence.videoTracks, proj.activeSequence.audioTracks);

      // add video track
      if (importData.videoTrackIndex === -1) {
        qeSeq === null || qeSeq === void 0 || qeSeq.addTracks(1, videoTracks.numTracks, 0, 0, 0, 0, 0);
      }

      // add audio track
      if (importData.audioTrackIndex === -1 && hasAudio) {
        qeSeq === null || qeSeq === void 0 || qeSeq.addTracks(0, 0, 1, 1, audioTracks.numTracks, 0, 0);
      }
      var videoTrackIndex = importData.videoTrackIndex == -1 ? videoTracks.numTracks - 1 : importData.videoTrackIndex;
      var audioTrackIndex = importData.audioTrackIndex == -1 ? audioTracks.numTracks - 1 : importData.audioTrackIndex;
      var importedClip = proj.activeSequence.importMGT(path, proj.activeSequence.getPlayerPosition(), videoTrackIndex, audioTrackIndex);
      deselectAllClips(proj.activeSequence);

      // resize MOGRT based on the "Scene Width" "Scene Height" properties
      // if they are available
      resizeMOGRT(importedClip, seqDimensions[0], seqDimensions[1]);
    } else if (type == 'AEP') {
      try {
        app.project.importAllAEComps(path, importBin);
      } catch (err) {
        log.error('AEP import failed: ' + String(path) + ' | Import bin: ' + String(importBin));
        return {
          success: false,
          error: 'AEP import failed: '
        };
      }
    } else {
      var AEVBinChildren = importBin.children,
        previousItems = [],
        importedProjectItem = null;

      // collect IDs of the files inside out bins

      for (var i = 0; i < IMPORT_FOLDER.children.numItems; i++) {
        previousItems.push(IMPORT_FOLDER.children[i].nodeId);
      }
      var successfullyImported = app.project.importFiles([path], true,
      // suppress warnings
      importBin, false); // import as numbered stills

      originalBin.select();
      log.info('Successfully imported: ' + String(successfullyImported));
      if (!successfullyImported) return {
        success: false,
        error: 'Failed to import files'
      };
      log.info('Find imported item');
      for (var j = 0; j < importBin.children.length; j++) {
        if (indexOf(previousItems, importBin.children[j].nodeId) == -1) {
          importedProjectItem = importBin.children[j];
          break;
        }
      }
      if (!importedProjectItem) {
        log.warn('Cannot find imported item');
        return {
          success: false,
          error: 'Cannot find imported item'
        };
      }
      var mediaClips = hasMediaClips(importedProjectItem);
      hasAudio = mediaClips.hasAudio;
      hasVideo = mediaClips.hasVideo;
      var CTI = seq.getPlayerPosition();
      var startTicks = Number(CTI.ticks);
      var startSeconds = Number(CTI.seconds);
      var endTicks = startTicks + (Number(importedProjectItem.getOutPoint().ticks) - Number(importedProjectItem.getInPoint().ticks));
      var secondsDuration = startSeconds + (Number(importedProjectItem.getOutPoint().seconds) - Number(importedProjectItem.getInPoint().seconds));
      log.info("Start time: " + String(startSeconds) + " seconds | End: " + String(secondsDuration) + " seconds");
      log.info("Start time: " + String(startTicks) + " ticks | End: " + String(endTicks) + " ticks");
      log.info("Converted time: " + String(startTicks / 254016000000) + " sec | End: " + String(endTicks / 254016000000) + " sec");
      var durationData = {
        start: startTicks,
        end: endTicks
      };
      var freeTracksData = {
        videoTrackIndex: -1,
        audioTrackIndex: -1
      };
      log.info("Duration data: ".concat(JSON.stringify(durationData, null, 2)));
      freeTracksData = findPlaceToInsertClip(durationData, hasVideo ? seq.videoTracks : 0, hasAudio ? seq.audioTracks : 0);

      // add video track
      if (freeTracksData.videoTrackIndex === -1) {
        qeSeq === null || qeSeq === void 0 || qeSeq.addTracks(1, videoTracks.numTracks, 0, 0, 0, 0, 0);
      }

      // add audio track
      if (freeTracksData.audioTrackIndex === -1 && hasAudio) {
        qeSeq === null || qeSeq === void 0 || qeSeq.addTracks(0, 0, 1, 1, audioTracks.numTracks, 0, 0);
      }
      var videoTrackIndex = freeTracksData.videoTrackIndex == -1 ? videoTracks.numTracks - 1 : freeTracksData.videoTrackIndex;
      var audioTrackIndex = freeTracksData.audioTrackIndex == -1 ? audioTracks.numTracks - 1 : freeTracksData.audioTrackIndex;
      log.info("Add item to video track: " + videoTrackIndex + " | audio track: " + audioTrackIndex);
      app.project.activeSequence.insertClip(importedProjectItem, currentTime, videoTrackIndex, audioTrackIndex);

      // app.project.activeSequence.videoTracks[videoTrackIndex].overwriteClip(importedProjectItem, currentTime);
      // app.project.activeSequence.audioTracks[audioTrackIndex].overwriteClip(importedProjectItem, currentTime);
    }
  } catch (e) {
    log.warn('Import file error.\n' + e.toString() + "\nScript file: " + File.decode(e.fileName).replace(/^.*[\|\/]/, '') + "\nFunction: " + arguments.callee.name + "\nError on line: " + e.line.toString());
    return {
      success: false,
      error: 'Import file error.'
    };
  }
  return {
    success: true,
    error: ''
  };
}
function hasMediaClips(projectItem) {
  var metaDataStr = "";
  var metaData = [];
  var res = {
    hasAudio: false,
    hasVideo: false
  };
  try {
    metaDataStr = projectItem.getProjectColumnsMetadata();
    metaData = JSON.parse(metaDataStr);

    // log.info("Metadata: " + String(JS0N.stringify(metaData, null, 4)));

    for (var i = 0; i < metaData.length; i++) {
      if (metaData[i].ColumnID == "Column.Intrinsic.AudioInfo") {
        res.hasAudio = metaData[i].ColumnValue !== "";
      } else if (metaData[i].ColumnID == "Column.Intrinsic.VideoInfo") {
        res.hasVideo = metaData[i].ColumnValue !== "";
      }
      if (res.hasAudio && res.hasVideo) {
        return res;
      }
    }
    if (!res.hasAudio) {
      log.error('"Column.Intrinsic.AudioInfo" is not present or empty in the metadata');
    }
    if (!res.hasVideo) {
      log.error('"Column.Intrinsic.VideoInfo" is not present or empty in the metadata');
    }
  } catch (e) {
    log.error("Error in hasMediaClips: " + e.toString() + "\nAt line: " + e.line);
    log.error("Metadata: " + String(metaDataStr));
  }
  if (!res.hasAudio && !res.hasVideo) {
    log.error('Neither "Column.Intrinsic.AudioInfo" nor "Column.Intrinsic.VideoInfo" is present in the metadata');
    log.error("Metadata: " + String(metaDataStr));
  }
  return res;
}
function findBin(parentBin, binName) {
  var foundBin;
  for (var i = 0; i < parentBin.children.numItems; i++) {
    if (parentBin.children[i].name == binName) {
      foundBin = parentBin.children[i];
    }
  }
  if (!foundBin) {
    parentBin.createBin(binName);
    foundBin = findBin(parentBin, binName);
  }
  return foundBin;
}
function findPlaceToInsertClip(itemDuration, videoTracks, audioTracks) {
  var videoIndex = videoTracks !== 0 ? findAvailableTrack(itemDuration, videoTracks) : {
    trackIndex: 0,
    trackItemIndex: 0
  };
  var audioIndex = audioTracks !== 0 ? findAvailableTrack(itemDuration, audioTracks) : {
    trackIndex: 0,
    trackItemIndex: 0
  };
  log.info('Tracks:\n        Video track index: ' + videoIndex.trackIndex + ' | Video track item index: ' + videoIndex.trackItemIndex + '\n        Audio track index: ' + audioIndex.trackIndex + ' | Audio track item index: ' + audioIndex.trackItemIndex);
  return {
    videoTrackIndex: videoIndex.trackIndex,
    videoTrackItemIndex: videoIndex.trackItemIndex,
    audioTrackIndex: audioIndex.trackIndex,
    audioTrackItemIndex: audioIndex.trackItemIndex
  };
}
function findAvailableTrack(itemDuration, tracks) {
  var importIndex = {
    trackIndex: -1,
    trackItemIndex: -1
  };
  var clipStart = Number(itemDuration.start);
  var clipEnd = Number(itemDuration.end);
  var lastFreeTrackIndex = -1;
  log.info('Starting findAvailableTrack...');
  log.info('Clip start: ' + clipStart + ', Clip end: ' + clipEnd);
  log.info('Total number of "' + String(tracks[0].mediaType) + '" tracks: ' + tracks.numTracks);
  try {
    // Determine if the track is audio or video and set the iteration order
    var isAudioTrack = tracks[0].id === 2;
    var start = isAudioTrack ? 0 : tracks.numTracks - 1;
    var end = isAudioTrack ? tracks.numTracks : -1;
    var step = isAudioTrack ? 1 : -1;
    var lastTrackIndex = isAudioTrack ? end : start;
    outerLoop: for (var i = start; i != end; i += step) {
      var track = tracks[i];
      var trackHasFreeSpace = false;
      log.info('        Checking track index: ' + i + ', Number of clips: ' + track.clips.numItems);

      // Empty track, insert at the beginning
      if (track.clips.numItems === 0) {
        importIndex = {
          trackIndex: i,
          trackItemIndex: 0
        };
        trackHasFreeSpace = true;
        log.info('            Track ' + i + ' is empty. Setting importIndex to { trackIndex: ' + i + ', trackItemIndex: 0 }');
        lastFreeTrackIndex = i;
        log.info('            Track ' + i + ' has free space. Updating lastFreeTrackIndex to ' + i);

        // we need to place the audio track at the first free track
        if (isAudioTrack) break;
        continue;
      }
      var previousEnd = 0; // Start checking from the beginning of the track
      var totalClips = track.clips.numItems;
      for (var j = 0; j <= totalClips; j++) {
        var nextStart = j < totalClips ? Number(track.clips[j].start.ticks) : Infinity;
        log.info('            Checking clip index: ' + j + ', Previous end: ' + previousEnd + ', Next start: ' + nextStart);
        if (clipStart >= previousEnd && clipEnd <= nextStart) {
          // Found a gap large enough between clips
          importIndex = {
            trackIndex: i,
            trackItemIndex: j
          };
          trackHasFreeSpace = true;
          log.info('            Found a gap in track ' + i + ' between clips ' + previousEnd + ' and ' + nextStart + '. Setting importIndex to { trackIndex: ' + i + ', trackItemIndex: ' + j + ' }');
          if (isAudioTrack) break outerLoop; // Stop further checking in this track as we found a valid gap
          break; // Stop further checking in this track as we found a valid gap
        }
        if (j < totalClips) {
          // Update previousEnd to the end of the current clip
          previousEnd = Number(track.clips[j].end.ticks);

          // If the previous end exceeds the clip end, we don't need to continue
          if (previousEnd > clipEnd) {
            log.info('            Previous end ' + previousEnd + ' exceeds clip end ' + clipEnd + '. Breaking out of the loop.');
            break;
          }
        }
      }
      if (lastTrackIndex === i && !trackHasFreeSpace) {
        // If we reached the last track and it doesn't have free space, insert at the end
        log.info('        Reached the last track ' + i + ' and it doesn\'t have free space. Breaking out of the loop.');
        break;
      }
      if (trackHasFreeSpace) {
        lastFreeTrackIndex = i;
        log.info('        Track ' + i + ' has free space. Updating lastFreeTrackIndex to ' + i);
      } else if (lastFreeTrackIndex !== -1) {
        // Fallback to the last free track if the current track is busy
        importIndex = {
          trackIndex: lastFreeTrackIndex,
          trackItemIndex: tracks[lastFreeTrackIndex].clips.numItems
        };
        log.info('        Current track ' + i + ' is busy. Falling back to last free track ' + lastFreeTrackIndex + '. Setting importIndex to { trackIndex: ' + lastFreeTrackIndex + ', trackItemIndex: ' + tracks[lastFreeTrackIndex].clips.numItems + ' }');
        break;
      }
    }
  } catch (err) {
    log.error('Error in findAvailableTrack: ' + err.toString() + "\nAt line: " + err.line);
  }
  log.info('--> Final importIndex: { trackIndex: ' + importIndex.trackIndex + ', trackItemIndex: ' + importIndex.trackItemIndex + ' }');
  return importIndex;
}
function deselectAllClips(activeSequence) {
  if (activeSequence) {
    for (var videoTracksIndex = 0; videoTracksIndex < activeSequence.videoTracks.numTracks; videoTracksIndex += 1) {
      for (var clipsIndex = 0; clipsIndex < activeSequence.videoTracks[videoTracksIndex].clips.numItems; clipsIndex += 1) {
        activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].setSelected(0, 0);
      }
    }
  }
}
function resizeMOGRT(newTrackItem, newWidth, newHeight) {
  if (!newTrackItem) {
    log.error("Track item is not available");
    return false;
  }
  var moComp = newTrackItem.getMGTComponent();
  if (!moComp) {
    log.error("Cannot get MOGRT component");
    return false;
  }
  try {
    var params = moComp.properties;
    var mogrtWidth = params.getParamForDisplayName("Scene Width");
    if (mogrtWidth) mogrtWidth.setValue(newWidth);
    var mogrtHeight = params.getParamForDisplayName("Scene Height");
    if (mogrtHeight) mogrtHeight.setValue(newHeight);
  } catch (e) {
    return false;
  }
  return true;
}
if (BridgeTalk.appName === "premierepro" || BridgeTalk.appName === "premiereprobeta") {
  app.bind("onSourceClipSelectedInProjectPanel", function (items) {
    if (items.length > 0) {
      IMPORT_FOLDER = items[0].type == ProjectItemType.BIN ? items[0] : app.project.rootItem;
    }
  });
}

var ppro = /*#__PURE__*/__objectFreeze({
    __proto__: null,
    importFile: importFile
});

var host = typeof $ !== "undefined" ? $ : window;

// A safe way to get the app name since some versions of Adobe Apps broken BridgeTalk in various places (e.g. After Effects 24-25)
// in that case we have to do various checks per app to deterimine the app name

var getAppNameSafely = function getAppNameSafely() {
  var compare = function compare(a, b) {
    return a.toLowerCase().indexOf(b.toLowerCase()) > -1;
  };
  var exists = function exists(a) {
    return typeof a !== "undefined";
  };
  var isBridgeTalkWorking = typeof BridgeTalk !== "undefined" && typeof BridgeTalk.appName !== "undefined";
  if (isBridgeTalkWorking) {
    return BridgeTalk.appName;
  } else if (app) {
    
    if (exists(app.name)) {
      
      var name = app.name;
      if (compare(name, "photoshop")) return "photoshop";
      if (compare(name, "illustrator")) return "illustrator";
      if (compare(name, "audition")) return "audition";
      if (compare(name, "bridge")) return "bridge";
      if (compare(name, "indesign")) return "indesign";
    }
    
    if (exists(app.appName)) {
      
      var appName = app.appName;
      if (compare(appName, "after effects")) return "aftereffects";
      if (compare(appName, "animate")) return "animate";
    }
    
    if (exists(app.path)) {
      
      var path = app.path;
      if (compare(path, "premiere")) return "premierepro";
    }
    
    if (exists(app.getEncoderHost) && exists(AMEFrontendEvent)) {
      return "ame";
    }
  }
  return "unknown";
};
switch (getAppNameSafely()) {
  // BOLT_AEFT_START
  case "aftereffects":
  case "aftereffectsbeta":
    host[ns] = aeft;
    break;
  // BOLT_AEFT_END

  // BOLT_PPRO_START
  case "premierepro":
  case "premiereprobeta":
    host[ns] = ppro;
    break;
  // BOLT_PPRO_END
}
// prettier-ignore

// https://extendscript.docsforadobe.dev/interapplication-communication/bridgetalk-class.html?highlight=bridgetalk#appname
})(this);