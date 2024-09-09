document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio)+', maximum-scale=1.0, user-scalable=1');
//  **********
  //  * inputs *
  //  **********

  // Chip Coordinates
  // const coordinates = {
  //     1: { x: 403, y: 360 },
  //     2: { x: 440, y: 465 },
  //     3: { x: 440, y: 226 },
  //     4: { x: 327, y: 123 },
  //     5: { x: 533, y: 123 }
  // };
  //soroka
  const coordinates = {
    1: { x: 245, y: 1053 },
    2: { x: 425, y: 1320 },
    3: { x: 750, y: 1250 },
    4: { x: 750, y: 1096 },
    5: { x: 500, y: 1005 },
    6: { x: 500, y: 825 },
    7: { x: 750, y: 793 },
    8: { x: 500, y: 640 },
    9: { x: 500, y: 460 },
    10: { x: 750, y: 412 },
    11: { x: 500, y: 274 },
    12: { x: 500, y: 92},
    13: { x: 750, y: 107 }
  };



// Route Coordinates
// IMPORTANT NOTE: THE ROOMS ARE WITH A NEGATIVE NUMBER!
 // const lineCoordinates = {
 //      1: { x: 425, y: 360 },
 //      2: { x: 425, y: 465 },
 //      3: { x: 425, y: 226 },
 //      4: { x: 327, y: 140 },
 //      5: { x: 533, y: 140 },
 //      6: {x: 425, y: 140},
 //  };  

//soroka
const lineCoordinates = {
  1: { x: 230, y: 1074 },
  2: { x: 465, y: 1380 },
  3: { x: 720, y: 1280 },
  4: { x: 720, y: 1071 },
  5: { x: 500, y: 1010 },
  6: { x: 500, y: 860 },
  7: { x: 720, y: 750 },
  8: { x: 500, y: 640 },
  9: { x: 500, y: 490 },
  10: { x: 720, y: 365 },
  11: { x: 500, y: 280 },
  12: { x: 500, y: 125 },
  13: { x: 720, y: 106 },
  14: { x: 230, y: 1221 },
  15: { x: 230, y: 1380 },
  16: { x: 465, y: 1277 },
  18: { x: 720, y: 1224 },
  19: { x: 720, y: 1170 },
  20: { x: 720, y: 1120 },
  22: { x: 720, y: 1012 },
  23: { x: 720, y: 958 },
  24: { x: 720, y: 905 },
  25: { x: 500, y: 905 },
  26: { x: 440, y: 860 },
  27: { x: 440, y: 1010 },
  28: { x: 720, y: 835 },
  30: { x: 720, y: 655 },
  31: { x: 720, y: 540 },
  32: { x: 500, y: 540 },
  33: { x: 440, y: 490 },
  34: { x: 440, y: 660 },
  35: { x: 720, y: 460 },
  36: { x: 720, y: 280 },
  37: { x: 720, y: 172 },
  38: { x: 500, y: 172 },
  39: { x: 440, y: 125 },
  40: { x: 440, y: 280 }
};

//mapping (roomNumber , closestChip)
  // const roomsToChipsMapping = {
  //   14: 5
  // };

const roomsToChipsMapping = {
    29: 12,
    28: 11,
    27: 11,
    32: 9,
    33: 9,
    35: 8,
    36: 8,
    217: 6,
    218: 6,
    40: 5,
    41: 5,
    200: 3,
    201: 3,
    202: 4,
    203: 4,
    204: 4,
    205: 4,
    206: 4,
    207: 7,
    208: 7,
    209: 7,
    210: 7,
    211: 10,
    212: 10,
    213: 10,
    214: 13,
    215: 13
  };

  
//soroka
const roomsToDotsMapping = {
  29: 39,
  28: 40,
  27: 40,
  32: 33,
  33: 33,
  35: 34,
  36: 34,
  217: 26,
  218: 26,
  40: 27,
  41: 27,
  200: 3,
  201: 18,
  202: 19,
  203: 20,
  204: 4,
  205: 22,
  206: 23,
  207: 24,
  208: 28,
  209: 7,
  210: 30,
  211: 31,
  212: 35,
  213: 10,
  214: 36,
  215: 37
};

  const physicalMapHeight = 1421;
  const physicalMapWidth = 1145;

  // Create a new graph
  const g = new graphlib.Graph();

  // Add nodes and edges - DIRECTED GRAPH
  // g.setNode('1');
  // g.setNode('2');
  // g.setNode('3');
  // g.setNode('4');
  // g.setNode('5');
  // g.setEdge('2', '1', { weight: 162 });
  // g.setEdge('1', '2', { weight: 162 });
  // g.setEdge('1', '3', { weight: 201 });
  // g.setEdge('3', '1', { weight: 201 });
  // g.setEdge('3', '4', { weight: 214 });
  // g.setEdge('4', '3', { weight: 214 });
  // g.setEdge('3', '5', { weight: 170 });
  // g.setEdge('5', '3', { weight: 170 });
  // g.setEdge('4', '5', { weight: 240 });
  // g.setEdge('5', '4', { weight: 240 });
    g.setNode('1');
    g.setNode('2');
    g.setNode('3');
    g.setNode('4');
    g.setNode('5');
    g.setNode('6');
    g.setNode('7');
    g.setNode('8');
    g.setNode('9');
    g.setNode('10');
    g.setNode('11');
    g.setNode('12');
    g.setNode('13');
    g.setEdge('1', '2', { weight: 1 });
    g.setEdge('2', '3', { weight: 1 });
    g.setEdge('3', '4', { weight: 1 });
    g.setEdge('4', '5', { weight: 1 });
    g.setEdge('4', '6', { weight: 1 });
    g.setEdge('4', '7', { weight: 1 });
    g.setEdge('5', '7', { weight: 1 });
    g.setEdge('5', '6', { weight: 1 });
    g.setEdge('6', '7', { weight: 1 });
    g.setEdge('7', '8', { weight: 1 });
    g.setEdge('7', '10', { weight: 1 });
    g.setEdge('7', '9', { weight: 1 });
    g.setEdge('8', '9', { weight: 1 });
    g.setEdge('8', '10', { weight: 1 });
    g.setEdge('9', '10', { weight: 1 });
    g.setEdge('10', '13', { weight: 1 });
    g.setEdge('10', '11', { weight: 1 });
    g.setEdge('10', '12', { weight: 1 });
    g.setEdge('11', '12', { weight: 1 });
    g.setEdge('11', '13', { weight: 1 });
    g.setEdge('12', '13', { weight: 1 });
    g.setEdge('2', '1', { weight: 1 });
    g.setEdge('3', '2', { weight: 1 });
    g.setEdge('4', '3', { weight: 1 });
    g.setEdge('5', '4', { weight: 1 });
    g.setEdge('6', '4', { weight: 1 });
    g.setEdge('7', '4', { weight: 1 });
    g.setEdge('7', '5', { weight: 1 });
    g.setEdge('6', '5', { weight: 1 });
    g.setEdge('7', '6', { weight: 1 });
    g.setEdge('8', '7', { weight: 1 });
    g.setEdge('10', '7', { weight: 1 });
    g.setEdge('9', '7', { weight: 1 });
    g.setEdge('9', '8', { weight: 1 });
    g.setEdge('10', '8', { weight: 1 });
    g.setEdge('10', '9', { weight: 1 });
    g.setEdge('13', '10', { weight: 1 });
    g.setEdge('11', '10', { weight: 1 });
    g.setEdge('12', '10', { weight: 1 });
    g.setEdge('12', '11', { weight: 1 });
    g.setEdge('13', '11', { weight: 1 });
    g.setEdge('13', '12', { weight: 1 });


  const g2 = new graphlib.Graph();;
  // Add nodes and edges - DIRECTED GRAPH
  // g2.setNode('1');
  // g2.setNode('2');
  // g2.setNode('3');
  // g2.setNode('4');
  // g2.setNode('5');
  // g2.setNode('6');
  // g2.setEdge('2', '1', { weight: 162 });
  // g2.setEdge('1', '2', { weight: 162 });
  // g2.setEdge('1', '3', { weight: 201 });
  // g2.setEdge('3', '1', { weight: 201 });
  // g2.setEdge('3', '6', { weight: 120 });
  // g2.setEdge('6', '3', { weight: 120 });
  // g2.setEdge('6', '5', { weight: 120 });
  // g2.setEdge('5', '6', { weight: 120 });
  // g2.setEdge('4', '6', { weight: 120 });
  // g2.setEdge('6', '4', { weight: 120 });
//soroka
    g2.setNode('1');
    g2.setNode('2');
    g2.setNode('3');
    g2.setNode('4');
    g2.setNode('5');
    g2.setNode('6');
    g2.setNode('7');
    g2.setNode('8');
    g2.setNode('9');
    g2.setNode('10');
    g2.setNode('11');
    g2.setNode('12');
    g2.setNode('13');
    g2.setNode('14');
    g2.setNode('15');
    g2.setNode('16');
    g2.setNode('18');
    g2.setNode('19');
    g2.setNode('20');
    g2.setNode('22');
    g2.setNode('23');
    g2.setNode('24');
    g2.setNode('25');
    g2.setNode('26');
    g2.setNode('27');
    g2.setNode('28');
    g2.setNode('30');
    g2.setNode('31');
    g2.setNode('32');
    g2.setNode('33');
    g2.setNode('34');
    g2.setNode('35');
    g2.setNode('36');
    g2.setNode('37');
    g2.setNode('38');
    g2.setNode('39');
    g2.setNode('40');
g2.setEdge('1', '14', { weight: 1 });
g2.setEdge('14', '15', { weight: 1 });
g2.setEdge('15', '2', { weight: 1 });
g2.setEdge('2', '16', { weight: 1 });
g2.setEdge('16', '3', { weight: 1 });
g2.setEdge('18', '3', { weight: 1 });
g2.setEdge('18', '19', { weight: 1 });
g2.setEdge('20', '19', { weight: 1 });
g2.setEdge('20', '4', { weight: 1 });
g2.setEdge('22', '4', { weight: 1 });
g2.setEdge('22', '23', { weight: 1 });
g2.setEdge('24', '23', { weight: 1 });
g2.setEdge('25', '24', { weight: 1 });
g2.setEdge('25', '6', { weight: 1 });
g2.setEdge('26', '6', { weight: 1 });
g2.setEdge('25', '5', { weight: 1 });
g2.setEdge('27', '5', { weight: 1 });
g2.setEdge('24', '28', { weight: 1 });
g2.setEdge('7', '28', { weight: 1 });
g2.setEdge('7', '30', { weight: 1 });
g2.setEdge('31', '30', { weight: 1 });
g2.setEdge('31', '32', { weight: 1 });
g2.setEdge('8', '32', { weight: 1 });
g2.setEdge('8', '34', { weight: 1 });
g2.setEdge('9', '32', { weight: 1 });
g2.setEdge('9', '33', { weight: 1 });
g2.setEdge('35', '31', { weight: 1 });
g2.setEdge('35', '10', { weight: 1 });
g2.setEdge('36', '10', { weight: 1 });
g2.setEdge('37', '36', { weight: 1 });
g2.setEdge('37', '38', { weight: 1 });
g2.setEdge('11', '38', { weight: 1 });
g2.setEdge('11', '40', { weight: 1 });
g2.setEdge('12', '38', { weight: 1 });
g2.setEdge('12', '39', { weight: 1 });
g2.setEdge('37', '13', { weight: 1 });
  g2.setEdge('14', '1', { weight: 1 });
g2.setEdge('15', '14', { weight: 1 });
g2.setEdge('2', '15', { weight: 1 });
g2.setEdge('16', '2', { weight: 1 });
g2.setEdge('3', '16', { weight: 1 });
g2.setEdge('3', '18', { weight: 1 });
g2.setEdge('19', '18', { weight: 1 });
g2.setEdge('19', '20', { weight: 1 });
g2.setEdge('4', '20', { weight: 1 });
g2.setEdge('4', '22', { weight: 1 });
g2.setEdge('23', '22', { weight: 1 });
g2.setEdge('23', '24', { weight: 1 });
g2.setEdge('24', '25', { weight: 1 });
g2.setEdge('6', '25', { weight: 1 });
g2.setEdge('6', '26', { weight: 1 });
g2.setEdge('5', '25', { weight: 1 });
g2.setEdge('5', '27', { weight: 1 });
g2.setEdge('28', '24', { weight: 1 });
g2.setEdge('28', '7', { weight: 1 });
g2.setEdge('30', '7', { weight: 1 });
g2.setEdge('30', '31', { weight: 1 });
g2.setEdge('32', '31', { weight: 1 });
g2.setEdge('34', '8', { weight: 1 });
g2.setEdge('32', '8', { weight: 1 });
g2.setEdge('33', '9', { weight: 1 });
g2.setEdge('32', '9', { weight: 1 });
g2.setEdge('31', '35', { weight: 1 });
g2.setEdge('10', '35', { weight: 1 });
g2.setEdge('10', '36', { weight: 1 });
g2.setEdge('36', '37', { weight: 1 });
g2.setEdge('38', '37', { weight: 1 });
g2.setEdge('38', '11', { weight: 1 });
g2.setEdge('40', '11', { weight: 1 });
g2.setEdge('38', '12', { weight: 1 });
g2.setEdge('39', '12', { weight: 1 });
g2.setEdge('13', '37', { weight: 1 });


const translations = {
    en: {
      message: "Follow highlighted route",
      clearStorage: "Reset Target",
      popupTitle: "Enter Target Location",
      submitButton: "Submit",
      targetLocationInput: "Enter target location",
      successMessage: "You have arrived at the destination!",
      correctDirectionMessage: "You're in the correct direction!",
      routeAdjustedMessage: "Route has been adjusted",
      enterLocationMessage: "Please enter a target location."
    },
    he: {
      message: "עקוב אחר המסלול המסומן",
      clearStorage: "אפס יעד",
      popupTitle: "הזן מיקום יעד",
      submitButton: "שלח",
      targetLocationInput: "הזן מיקום יעד",
      successMessage: "הגעת ליעד!",
      correctDirectionMessage: "אתה בכיוון הנכון!",
      routeAdjustedMessage: "המסלול עודכן",
      enterLocationMessage: "נא להזין מיקום יעד."
    },
    ar: {
      message: "اتبع المسار المميز",
      clearStorage: "إعادة تعيين الهدف",
      popupTitle: "أدخل موقع الهدف",
      submitButton: "إرسال",
      targetLocationInput: "أدخل موقع الهدف",
      successMessage: "لقد وصلت إلى الوجهة!",
      correctDirectionMessage: "أنت في الاتجاه الصحيح!",
      routeAdjustedMessage: "تم تعديل المسار",
      enterLocationMessage: "الرجاء إدخال موقع الهدف."
    },
    ru: {
      message: "Следуйте по выделенному маршруту",
      clearStorage: "Сбросить цель",
      popupTitle: "Введите местоположение цели",
      submitButton: "Отправить",
      targetLocationInput: "Введите местоположение цели",
      successMessage: "Вы прибыли на место назначения!",
      correctDirectionMessage: "Вы на правильном пути!",
      routeAdjustedMessage: "Маршрут был скорректирован",
      enterLocationMessage: "Пожалуйста, введите место назначения."
    }
  };

  const MessageType = Object.freeze({
    MESSAGE: 'message',
    CLEAR_STORAGE: 'clearStorage',
    POPUP_TITLE: 'popupTitle',
    SUBMIT_BUTTON: 'submitButton',
    TARGET_LOCATION_INPUT: 'targetLocationInput',
    SUCCESS_MESSAGE: 'successMessage',
    CORRECT_DIRECTION_MESSAGE: 'correctDirectionMessage',
    ROUTE_ADJUSTED_MESSAGE: 'routeAdjustedMessage',
    ENTER_LOCATION_MESSAGE: 'enterLocationMessage'
});

// popup request for target location for the first time
document.addEventListener('DOMContentLoaded', () => { 
  if(!localStorage.getItem("selectedLanguage"))
    localStorage.setItem("selectedLanguage", "en");
  localStorage.setItem('currentMessageType', MessageType.MESSAGE);
  function switchLanguage(selected_launguge){
    currentMessageType = localStorage.getItem('currentMessageType'); 
    if(currentMessageType != null){
      const selectedLanguageDict = translations[localStorage.getItem('selectedLanguage')];
    // Update the UI with the translated text
    document.getElementById('clearStorage').textContent = selectedLanguageDict['clearStorage'];
    document.querySelector('#popup h2').textContent = selectedLanguageDict['popupTitle']; // Update popup title
    document.getElementById('targetLocationInput').placeholder = selectedLanguageDict['targetLocationInput']; // Update input placeholder
    document.getElementById('submitLocation').textContent = selectedLanguageDict['submitButton']; // Update submit button text

      const nextMessage = selectedLanguageDict[currentMessageType];
      const displayArea = document.getElementById('message');
      displayArea.textContent = nextMessage;
    }
  }
  const languageSelect = document.getElementById('languageSelect');
  languageSelect.addEventListener('change', (event) => {
      const selectedLanguage = event.target.value; // Get the selected language (en, he, ar, ru)
      localStorage.setItem('selectedLanguage', selectedLanguage); // Store the selected language in localStorage
      const selectedLanguageDict = translations[selectedLanguage];
      switchLanguage(selectedLanguage); // Call the function to switch the language
  });
});


// evaluate and show the route
function validate() {
    if (!graphlib || !graphlib.alg || !graphlib.alg.dijkstra) {
        console.error('graphlib or graphlib.alg.dijkstra not loaded.');
        return;
    }

    const dotsContainer = document.getElementById('dots');
    const linesContainer = document.getElementById('lines');


    // Fucntion to Create dots for each coordinate
    function createDot(nodeNum, isInPath, isSource, isDst, isChip) {
      const dot = document.createElement('div');
      dot.className = 'dot';

      
      const image = document.querySelector('#graphImage');
      const imageWidth = image.clientWidth;
      dotsContainer.style.width = `${imageWidth}px`
      linesContainer.style.width = `${imageWidth}px`
      
      //style the dot
      dot.style.left = `${coordinates[nodeNum].x / physicalMapWidth * 100}%`;
      dot.style.top = `${coordinates[nodeNum].y / physicalMapHeight * 100}%`;
      dot.title = `Node ${nodeNum}`; // Optional: Add tooltip
      
      //add the inPath/not inPath icon on points
      var svgType = "";
      if(isInPath) {
        svgType =  `
          <svg width="2vh" height="2vh" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#000000"/>
          </svg>`;
      } else {
        svgType = `
          <svg width="2vh" height="2vh" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="#000000"/>
          </svg>`;
      }
      dot.innerHTML = svgType;
 
      dotsContainer.appendChild(dot); // add the new dot to html
    }
  
    
  // Function to get query parameter from URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        const res = urlParams.get(param);
        if(!res)
          return '1';
        return res;
    }

    // Extract chipId from URL and set as start node
    const startNode = getQueryParam('chipId');
    const endNode = localStorage.getItem('targetLocation');

    // Compute shortest paths using Dijkstra’s algorithm
    const shortestPathsChips = graphlib.alg.dijkstra(g, startNode);
    const shortestPathsRoute = graphlib.alg.dijkstra(g2, startNode);
    console.log(shortestPathsRoute);
    // Function to get the shortest path from start to end nodes
    function getPath(start, end, shortestPaths) {
        let path = [];
        let currentNode = end;

        while (currentNode !== start) {
            path.unshift(currentNode);
            currentNode = shortestPaths[currentNode]?.predecessor;
            if (currentNode === undefined) {
                // No path exists
                return 'No path found';
            }
        }
        path.unshift(start);
        return path;
    }
    
    const displayArea = document.getElementById('message');
  
    const path = getPath(startNode, '' + roomsToChipsMapping[endNode], shortestPathsChips);
    const pathRoute = getPath(startNode, '' + roomsToDotsMapping[endNode], shortestPathsRoute);
  
    const isNewRoute =  localStorage.getItem('isRouteNew');
    const selectedLanguageDict = translations[localStorage.getItem('selectedLanguage')];
    var messageToUser = selectedLanguageDict['message'];
    if(startNode == endNode) {
      displayArea.textContent = selectedLanguageDict['successMessage'];
      localStorage.setItem('currentMessageType', MessageType.SUCCESS_MESSAGE);
      // displayArea.textContent = "You have arrived at the destination!";
    }
    else if(isNewRoute == "false") {
      // check if new route is a sub-route of the previous one
      var prevPath = localStorage.getItem('currentPath');
      if(prevPath.includes(startNode)) {      // if it is, print "your'e in the correct direction"
        messageToUser = selectedLanguageDict['message'];
        currentMessageType = MessageType.MESSAGE;
      }
      else {
        messageToUser = selectedLanguageDict['routeAdjustedMessage'];
        currentMessageType = MessageType.ROUTE_ADJUSTED_MESSAGE;
      }
      localStorage.setItem('currentMessageType', currentMessageType);
    }

    displayArea.textContent = messageToUser;
    
    localStorage.setItem('currentPath', path);

    console.log(`Shortest path of chips from ${startNode} to ${endNode}:`, path);
    console.log(`Shortest path of route points from ${startNode} to ${endNode}:`, pathRoute);

    
    // Create dots and color based on path status
    for (let nodeNum in coordinates) {
        if (path.includes(nodeNum)) {
            createDot(nodeNum,  true , (nodeNum == startNode), (nodeNum == endNode), true); // Node is in the path
        } else {
            createDot(nodeNum, false, (nodeNum == startNode), (nodeNum == endNode), true); // Node is not in the path
        }
    }
  
  
  // Function to loop through the shortest path and create lines between consecutive nodes
function drawPath(shortestPath) {
  
  linesContainer.innerHtml += linesContainer.innerHTML += `
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 Z" fill="green"></path>
    </marker>
  </defs>
`;
  
  // Function to create a line between two specific pixel positions
  function createLine(x1, y1, x2, y2) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('class', 'line');
    line.setAttribute('stroke-dasharray', '5, 5');  // 5 units dash, 5 units gap (adjust for desired effect)
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', 'green');
    line.setAttribute('stroke-width', '6');
    line.setAttribute('marker-end','url(#arrow)');
    linesContainer.appendChild(line);  // Append line to SVG container
      }
  
  const image = document.querySelector('#graphImage');
  const imageWidth = image.clientWidth;
  const height = document.querySelector('#graphImage');
  const imageHeight = image.clientHeight;
  console.log(imageHeight);

  for (let i = 0; i < shortestPath.length - 1; i++) {
    const currentNode = pathRoute[i];
    const nextNode = pathRoute[i + 1];

    // Get coordinates of the current and next node
    var { x: x1, y: y1 } = lineCoordinates[currentNode];
    var { x: x2, y: y2 } = lineCoordinates[nextNode];
    
    const x1ratio = lineCoordinates[currentNode].x / physicalMapWidth;
    x1 =  x1ratio * imageWidth;
    const y1ratio = lineCoordinates[currentNode].y / physicalMapHeight;
    y1 = y1ratio * imageHeight;
    
    const x2ratio = lineCoordinates[nextNode].x / physicalMapWidth;
    x2 = x2ratio * imageWidth;
    const y2ratio = lineCoordinates[nextNode].y / physicalMapHeight;
    y2 = y2ratio * imageHeight;
    
    // Call createLine to draw the line between the current node and the next node
    createLine(x1, y1, x2, y2);
    
    //add the avatar icon 
    if( i == 0) {
      dotsContainer.innerHTML += `<svg id="avatar" style="position: absolute; left: ${x1ratio * 100}%; top: ${y1ratio * 100}%;" width="3vh" height="3vh" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0" fill="#2e3436"/>
        </svg>`;
    }
    
    //add the destination pin-point icon
    if(i == shortestPath.length - 2) {
      dotsContainer.innerHTML += `<svg id="destination" style="position: absolute; left: ${x2ratio * 100}%; top: ${y2ratio * 100}%;" width="4vh" height="4vh" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.5C11.933 11.5 13.5 9.933 13.5 8C13.5 6.067 11.933 4.5 10 4.5C8.067 4.5 6.5 6.067 6.5 8C6.5 9.933 8.067 11.5 10 11.5ZM10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.17157 9.5 8.5 8.82843 8.5 8C8.5 7.17157 9.17157 6.5 10 6.5Z" fill="green"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM15.5 8.12313C15.5 11.4027 11.7551 17.5 10 17.5C8.24487 17.5 4.5 11.4027 4.5 8.12313C4.5 5.0134 6.96668 2.5 10 2.5C13.0333 2.5 15.5 5.0134 15.5 8.12313Z" fill="green"/>
        </svg>`;
      }
    }
  }

  drawPath(pathRoute);
}

function clear() {
  // clear lines
  if(document.querySelectorAll('.line').length > 0) {
    document.querySelectorAll('.line').forEach(line => line.remove());
  }
  
  // clear dots
  if(document.querySelectorAll('.dot').length > 0) {
    document.querySelectorAll('.dot').forEach(dot => dot.remove());
  }
  
  // clear avatar
  if(document.querySelector('#avatar'))
    document.querySelector('#avatar').remove();
  
  // clear destination
  if(document.querySelector('#destination'))
    document.querySelector('#destination').remove();

}


function popup() {
  const popup = document.getElementById('popup');
  const targetLocationInput = document.getElementById('targetLocationInput');
  const submitLocationButton = document.getElementById('submitLocation');

  // Check localStorage for targetLocation
  let targetLocation = localStorage.getItem('targetLocation');

  var expirationTime = localStorage.getItem('targetLocationExpiration');

  if (!targetLocation || (expirationTime && Date.now() > expirationTime)) {
      // Show the popup if targetLocation is not found
      popup.classList.remove('hidden');

      submitLocationButton.addEventListener('click', () => {
          targetLocation = targetLocationInput.value.trim();
          console.log(targetLocation);

          if (targetLocation) {
              // Save the targetLocation to localStorage
              localStorage.setItem('targetLocation', targetLocation);
              // Set rout expiration time
              var expirationTime = Date.now() + (15 * 60 * 1000); // 15 minutes from now
              localStorage.setItem('targetLocationExpiration', expirationTime);
              // Set state to new route
              localStorage.setItem('isRouteNew', true);
              // Hide the popup
              popup.classList.add('hidden');

              // You can now use targetLocation in your application
              console.log('Target location saved:', targetLocation);
              validate();
          } else {
              alert('Please enter a target location.');
          }
      });
  } else {
      localStorage.setItem('isRouteNew', false);
      console.log('Target location already in localStorage:', targetLocation);
      validate();
  }
}

// popup request for target location for the first time
document.addEventListener('DOMContentLoaded', () => {
    // Reset target button logic
    const clearStorageButton = document.getElementById('clearStorage');
    clearStorageButton.addEventListener('click', () => {
      localStorage.removeItem('targetLocation');
      localStorage.removeItem('targetLocationExpiration');
      localStorage.removeItem('isRouteNew');
      localStorage.removeItem('currentPath');
        // location.reload(); 
      clear();
      popup();
    });
    popup();
});

