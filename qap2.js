/**
 * Programming With JavaScript - QAP2
 *
 *
 * Please update the following with your information:
 *
 *      Name: Zachary Collier
 *      Date: Nov. 16 2024
 *
 * Submission Questions
 * 1. 10-20 hours on and off throughout the week.
 * 2. w3schools, RexEgg for Regex Cheat Sheet (https://www.rexegg.com/regex-quickstart.php), RegEx Pal for RegEx testing
 * 3. No assistance from classmates.
 * 4. No additional assistance from instructors.
 * 5. Surprisingly easy. I feel confident in my ability so solve string-related problems.
 */

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscore
 * ('_'), and makes it lowercase.
 *
 * We want to be able to convert a string to Lower Snake Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are lower cased.
 *
 * The snake() function should work like this:
 *
 * snake('abc') --> returns 'abc'
 * snake(' ABC ') --> returns 'abc'
 * snake('ABC') --> returns 'abc'
 * snake('A BC') --> returns 'a_bc'
 * snake(' A bC  ') --> returns 'a_bc'
 * snake('A   BC') --> returns 'a_bc'
 * snake('A.BC') --> returns 'a_bc'
 * snake(' A..  B   C ') --> returns 'a_b_c'
 *
 ******************************************************************************/

function snake(value) {
  value = value.trim();
  value = value.toLowerCase();
  value = value.replaceAll(/\s+/g, "_");
  value = value.replaceAll(/\.+/g, "_");
  value = value.replaceAll(/_+/g, "_");
  return value;
}

console.log(snake("abc"));
console.log(snake("ABC"));
console.log(snake("  abc  "));
console.log(snake("a bc"));
console.log(snake("ab.c"));
console.log(snake("A  .. b    C"));

/*******************************************************************************
 * Problem 2: create an HTML <video> element for the given url.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to video:
 *
 * http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image? or a video?), we have to use special markup. The <video>
 * tag is how we specify that a URL is to be interpreted as a video, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 *
 * Here is how we might use HTML to markup this video:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>
 *
 * Our <video> has two attributes:
 *
 * - src: the URL to a video file
 * - width: the width to use (in pixels) when showing the video
 *
 * Write the createVideo() function to accept a URL and width, and return the
 * properly formatted video element.  For example:
 *
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 *
 * should return the following string of HTML:
 *
 * '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
 *
 * A <video> can also optionally contain a `controls` attribute, which turns on the play/pause/etc controls. For example:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>
 *
 * In this case, the <video> element should include the user controls.  Therefore,
 * your createVideo() function should also accept a third argument, controls:
 *
 * // No controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 * // With controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true)
 *
 * The returned <video> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and width attribute values should be wrapped in double-quotes (e.g., src="..." width="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." width="..." controls)
 * - The width attribute should only be added if a valid integer value (number or string) is included.  Otherwise ignore it.
 *
 * ******************************************************************************/

function createVideo(src, width, controls) {
  src = src.trim();
  let widthStr = "";
  let widthRegex = /^\d+\.?\d*$/;
  let video;
  if (widthRegex.test(width)) {
    widthStr = ` width="${width}px"`;
  }
  if (controls === true) {
    video = `<video src="${src}"${widthStr} controls></video>`;
  } else {
    video = `<video src=${src}${widthStr}></video>`;
  }
  return video;
}

document.getElementById("video1").innerHTML = createVideo(
  "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
  500
);
document.getElementById("video2").innerHTML = createVideo(
  "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
  500,
  true
);

/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * January 1, 2021 would therefore be the following date string:
 *
 * 2021-01-01
 *
 * Similarly, September 29, 2021 would be:
 *
 * 2021-09-29
 *
 * Write a function, parseDateString() that accepts a date string of the format
 * specified above, and returns a JavaScript Date object, set to the correct day.
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * To help developers using your function, you are asked to provide detailed error
 * messages when the date string is formatted incorrectly.  We will use the `throw`
 * statement to throw an Error object when a particular value is not what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01-01-01') should fail, because the year is
 * not 4 digits.
 *
 * Similarly, parseDateString('2021-1-01') should fail because
 * the day is not 2 digits, and parseDateString('2021-01-1') should fail because
 * the month is not 2 digits.
 *
 * Also, a totally invalid date string should also
 * cause an exception to be thrown, for example parseDateString(null) or
 * parseDateString("this is totally wrong").
 *
 ******************************************************************************/

function parseDateString(value) {
  let yearRegex = /^\d{4}/;
  let monthRegex = /\-\d{2}\-/;
  let dayRegex = /\d{2}$/;
  try {
    if (!yearRegex.test(value)) {
      throw "Year must be 4 digits.";
    }
    if (!dayRegex.test(value)) {
      throw "Day must be 2 digits.";
    }
    if (!monthRegex.test(value)) {
      throw "Month must be 2 digits.";
    }
    return new Date(value);
  } catch (err) {
    console.log(`ERR: ${err}`);
  }
}
//NOTE: Date may show a day earlier in console due to Newfoundland's Timezone.
console.log(parseDateString("2024-10-20"));
console.log(parseDateString("2024-1-20"));
console.log(parseDateString("2024-10-2"));
console.log(parseDateString("224-10-20"));
console.log(parseDateString("what"));

/*******************************************************************************
 * Problem 4: convert Date to date string with specified format.
 *
 * As above, a date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object, and returns a
 * date string formatted according to the specification above. Make sure your
 * day and month values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
 *
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021-01-29)) should return '2021-01-29'
 *
 * If an invalid Date is passed, throw an Error object with an appropriate error message.
 * HINT: use try/catch, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 ******************************************************************************/

function toDateString(value) {
  try {
    let dateYear = value.getFullYear();
    let dateMonth = value.getMonth() + 1;
    let dateDay = value.getDate();

    return `${dateYear}-${dateMonth}-${dateDay}`;
  } catch {
    console.log("ERR: Invalid Date.");
  }
}

console.log(toDateString(parseDateString("2024-10-20")));
console.log(toDateString(parseDateString("2024-10-2")));

/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * A example, let's suppose the Keyin College St.John's campus is located at:
 *
 * Longitude: -77.4369 (negative number means West)
 * Latitude: 42.9755 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "42.9755,-77.4369" NOTE: no space
 * 4. "[-77.4369, 42.9755]" NOTE: the space, as well as lat/lng values are reversed
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the form: "(lat, lng)"
 *
 ******************************************************************************/

function normalizeCoord(value) {
  let coordRegex = /^\[?\-?\d+\.?\d*\,\s?\-?\d+\.?\d*\]?$/g;
  let coordBracketRegex = /^\[.*\]$/g;
  let coordArray;
  try {
    if (coordRegex.test(value)) {
      if (coordBracketRegex.test(value)) {
        value = value.replace(/\s/g, "");
        value = value.replace(/\[/g, "");
        value = value.replace(/\]/g, "");
        let coordArrayReverse = value.split(",");
        coordArray = [coordArrayReverse[1], coordArrayReverse[0]];
      } else {
        coordArray = value.split(",");
      }
    } else {
      throw "Invalid Coordinates.";
    }
    if (coordArray[0] < -90 || coordArray[0] > 90) {
      throw "Invalid Latitude. Must be between -90 and 90.";
    }
    if (coordArray[1] < -180 || coordArray[1] > 180) {
      throw "Invalid Longitude. Must be between -180 and 180.";
    }
    return `(${coordArray[0]}, ${coordArray[1]})`;
  } catch (err) {
    console.log(`ERR: ${err}`);
  }
}

console.log(normalizeCoord("42.9755,-77.4369"));
console.log(normalizeCoord("[-77.4369, 42.9755]"));
console.log(normalizeCoord("(-77.4369, 42.9755)"));
console.log(normalizeCoord("Pizza"));
console.log(normalizeCoord("[-190, 42.9755]"));
console.log(normalizeCoord("[-77.4369, 190]"));

/*******************************************************************************
 * Problem 6: format any number of coordinates as a list in a string
 *
 * You are asked to format geographic lat, lng coordinates in a list using your
 * normalizeCoord() function from problem 5.
 *
 * Where normalizeCoord() takes a single geographic coord, the formatCoords()
 * function takes a list of any number of geographic coordinates, parses them,
 * filters out any invalid coords, and creates a list.
 *
 * For example: given the following coords, "42.9755,-77.4369" and "[-62.1234, 42.9755]",
 * a new list would be created of the following form "((42.9755, -77.4369), (42.9755, -62.1234))".
 *
 * Notice how the list has been enclosed in an extra set of (...) braces, and each
 * formatted geographic coordinate is separated by a comma and space.
 *
 * The formatCoords() function can take any number of arguments, but they must all
 * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
 * an Error is thrown), skip the value.  For example:
 *
 * formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000") should return
 * "((42.9755, -77.4369), (42.9755, -62.1234))" and skip the invalid coordinate.
 *

 ******************************************************************************/

function formatCoords(...values) {
  let valueArray = [];
  let valueString;
  for (let value of values) {
    if (normalizeCoord(value) != undefined) {
      valueArray.push(normalizeCoord(value));
    }
  }
  valueString = valueArray.join(", ");
  return `(${valueString})`;
}

console.log(
  formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000")
);

/*******************************************************************************
 * Problem 7: determine MIME type from filename extension
 *
 * Web browsers and servers exchange streams of bytes, which must be interpreted
 * by the receiver based on their type.  For example, an HTML web page is
 * plain text, while a JPG image is a binary sequence.
 *
 * The Content-Type header contains information about a resource's MIME type, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
 * The type is general, for example, 'text' or 'video'.  The subtype is more
 * specific, indicating the specific type of text, image, video, etc.  See:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *
 * A number of common types are used in web development:
 *
 * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
 *
 * Your mimeFromFilename() function should support all of the following extensions
 * with and without the leading '.':
 *
 * - .html, .htm --> text/html
 * - .css --> text/css
 * - .js --> text/javascript
 * - .jpg, .jpeg --> image/jpeg
 * - .gif --> image/gif
 * - .bmp --> image/bmp
 * - .ico, .cur --> image/x-icon
 * - .png --> image/png
 * - .svg --> image/svg+xml
 * - .webp --> image/webp
 * - .mp3 --> audio/mp3
 * - .wav --> audio/wav
 * - .mp4 --> video/mp4
 * - .webm --> video/webm
 * - .json --> application/json
 * - .mpeg --> video/mpeg
 * - .csv --> text/csv
 * - .ttf --> font/ttf
 * - .woff --> font/woff
 * - .zip --> application/zip
 * - .avi --> video/x-msvideo
 *
 *
 * NOTE: any other extension should use the `application/octet-stream` MIME type,
 * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
 * also use `application/octet-stream` if the file has no extension.
 *

 ******************************************************************************/

function mimeFromFilename(filename) {
  let extension = filename.slice(filename.lastIndexOf("."));
  let mimeType;
  switch (extension) {
    case ".txt":
      mimeType = "text/plain";
      break;
    case ".html" || ".htm":
      mimeType = "text/html";
      break;
    case ".css":
      mimeType = "text/css";
      break;
    case ".js":
      mimeType = "text.javascript";
      break;
    case ".jpg" || ".jpeg":
      mimeType = "image/jpeg";
      break;
    case "gif":
      mimeType = "image/gif";
      break;
    case ".bmp":
      mimeType = "image/bmp";
      break;
    case ".ico" || ".cur":
      mimeType = "image/x-icon";
      break;
    case ".png":
      mimeType = "image/png";
      break;
    case ".svg":
      mimeType = "image/svg+xml";
      break;
    case ".webp":
      mimeType = "image/webp";
      break;
    case ".mp3":
      mimeType = "audio/mp3";
      break;
    case ".wav":
      mimeType = "audio/wav";
      break;
    case ".mp4":
      mimeType = "video/mp4";
      break;
    case ".webm":
      mimeType = "video/webm";
      break;
    case ".json":
      mimeType = "application/json";
      break;
    case ".mpeg":
      mimeType = "video/mpeg";
      break;
    case ".csv":
      mimeType = "text/csv";
      break;
    case ".ttf":
      mimeType = "font/ttf";
      break;
    case ".woff":
      mimeType = "font/woff";
      break;
    case ".zip":
      mimeType = "application/zip";
      break;
    case ".avi":
      mimeType = "video/x-msvideo";
      break;
    default:
      mimeType = "application/octet-stream";
  }
  return mimeType;
}

console.log(mimeFromFilename("/User/Documents/readme.txt"));
console.log(mimeFromFilename("/User/Documents/readme.avi"));
console.log(mimeFromFilename("/User/Documents/readme.exe"));

/*******************************************************************************
 * Problem 8, Part 1: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
 * so that the URL opens in a blank tab/window.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 ******************************************************************************/

function generateLicenseLink(licenseCode, targetBlank) {
  licenseCode = licenseCode.slice(licenseCode.indexOf("-") + 1).toLowerCase();
  let licenseLink = `https://creativecommons.org/licenses/${licenseCode}/4.0/`;
  let licenseText;
  switch (licenseCode) {
    case "by":
      licenseText = "Creative Commons Attribution License";
      break;
    case "by-nc":
      licenseText = "Creative Commons Attribution-NonCommercial License";
      break;
    case "by-sa":
      licenseText = "Creative Commons Attribution-ShareAlike License";
      break;
    case "by-nd":
      licenseText = "Creative Commons Attribution-NoDerivs License";
      break;
    case "by-nc-sa":
      licenseText =
        "Creative Commons Attribution-NonCommercial-ShareAlike License";
      break;
    case "by-nc-nd":
      licenseText =
        "Creative Commons Attribution-NonCommercial-NoDerivs License";
      break;
    default:
      licenseLink = "https://choosealicense.com/no-permission/";
      licenseText = "All Rights Reserved";
  }

  if (targetBlank) {
    return `<a href="${licenseLink}" target="_blank">${licenseText}</a>`;
  } else {
    return `<a href="${licenseLink}">${licenseText}</a>`;
  }
}

document.getElementById("licenses1").innerHTML = generateLicenseLink(
  "CC-BY-NC",
  false
);
document.getElementById("licenses2").innerHTML = generateLicenseLink(
  "CC-BY",
  true
);

/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function pureBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value, according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values, return `true` (Boolean)
 * 3. If the value is one of the "false" type values, return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 ******************************************************************************/

function pureBool(value) {
  try {
    if (typeof value === "boolean") {
      return value;
    } else if (typeof value === "number") {
      if (value > 0) {
        return true;
      } else {
        return false;
      }
    } else if (typeof value === "string") {
      value = value.toLowerCase();
      const trueVals = ["yes", "y", "oui", "o", "true", "t", "vrai", "v"];
      const falseVals = ["no", "n", "non", "false", "f", "faux"];
      for (let t = 0; t < trueVals.length; ++t) {
        if (value === trueVals[t]) {
          return true;
        }
      }
      for (let f = 0; f < falseVals.length; ++f) {
        if (value === falseVals[f]) {
          return false;
        }
      }
    }
    throw "Invalid Value";
  } catch (err) {
    console.log(`ERR: ${err}`);
  }
}

console.log(pureBool("oui"));
console.log(pureBool("non"));
console.log(pureBool("OUI"));
console.log(pureBool("False"));
console.log(pureBool("not"));
console.log(pureBool(1));
console.log(pureBool(0));

/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * every('Y', 'yes', 1) --> returns true
 * any('Y', 'no', 1) --> returns true
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/

function every(...values) {
  try {
    let valueArray = [];
    for (let v in values) {
      if (pureBool(values[v]) != undefined) {
        valueArray.push(pureBool(values[v]));
      } else {
        throw "Invalid Value in Value List";
      }
    }
    for (let i = 0; i < valueArray.length; ++i) {
      if (!valueArray[i]) {
        return false;
      }
    }
    return true;
  } catch (err) {
    console.log(`ERR: ${err}`);
  }
}

function any(...values) {
  try {
    let valueArray = [];
    for (let v in values) {
      if (pureBool(values[v]) != undefined) {
        valueArray.push(pureBool(values[v]));
      } else {
        throw "Invalid Value in Value List";
      }
    }
    for (let i = 0; i < valueArray.length; ++i) {
      if (valueArray[i]) {
        return true;
      }
    }
    return false;
  } catch (err) {
    console.log(`ERR: ${err}`);
  }
}

function none(...values) {
  try {
    let valueArray = [];
    for (let v in values) {
      if (pureBool(values[v]) != undefined) {
        valueArray.push(pureBool(values[v]));
      } else {
        throw "Invalid Value in Value List";
      }
    }
    for (let i = 0; i < valueArray.length; ++i) {
      if (valueArray[i]) {
        return false;
      }
    }
    return true;
  } catch (err) {
    console.log(`ERR: ${err}`);
  }
}

console.log(every("Y", "yes", 1));
console.log(every("Y", "no", 1));
console.log(any("Y", "no", 1));
console.log(any("N", "no", 0));
console.log(none("Y", "no", 1));
console.log(none("N", "no", 0));
console.log(none("Y", "invalid", 1));

/*******************************************************************************
 * Problem 10 - build a URL
 *
 * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
 * for data involves formatting a URL in a particular way.  As we know might know, a URL can contain optional name=value pairs. For reference: read query strings on web :)
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - order: a string indicating sort order, with possible values of `ascending` or `descending`
 * - count: a number from 1 to 50, indicating how many results to return per page
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
 * a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
 *
 * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * The following might be the parameters
 *
 *  "query" the query to use. Must be properly URI encoded
 * "order" the sort order to use, must be one of `ascending` or `descending`
 * "count" the number of results per page, must be 1-50
 * "license" the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 ******************************************************************************/

function buildUrl(query, order, count, license) {
  try {
    const validLicenses = [
      "none",
      "any",
      "cc-by",
      "cc-by-nc",
      "cc-by-sa",
      "cc-by-nd",
      "cc-by-nc-sa",
      "cc-by-nc-nd",
    ];
    order = order.toLowerCase();
    license = license.toLowerCase();
    if (order != "ascending" && order != "descending") {
      throw "Choose either ascenging or descending order.";
    }
    if (count < 1 || count > 50) {
      throw "Count must be between 1 and 50.";
    }

    let validLicense = false;
    for (let i = 0; i < validLicenses.length; ++i) {
      if (license === validLicenses[i]) {
        validLicense = true;
        break;
      }
    }
    if (!validLicense) {
      throw "Invalid License";
    }

    let encodedQuery = `query='${encodeURIComponent(query)}'`;
    let orderStr = `order=${order}`;
    let countStr = `count=${count}`;
    let licenseStr = `license=${license}`;
    return `https://api.inaturalist.org/v2/observations?${encodedQuery}&${countStr}&${orderStr}&${licenseStr}`;
  } catch (err) {
    console.log(`ERR: ${err}`);
  }
}

console.log(buildUrl("Monarch Butterfly", "ascending", 25, "cc-by"));
console.log(buildUrl("Monarch Butterfly", "ascend", 25, "cc-by"));
console.log(buildUrl("Monarch Butterfly", "ascending", 55, "cc-by"));
console.log(buildUrl("Monarch Butterfly", "ascending", 25, "what"));
console.log(buildUrl("Monarch!#* Butterfly?", "ascending", 25, "cc-by"));
