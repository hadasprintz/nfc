document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio)+', maximum-scale=1.0, user-scalable=1');
//  **********
  //  * inputs *
  //  **********

  // physical Coordinates for nodes on the picture
  const coordinates = {
      1: { x: 403, y: 360 },
      2: { x: 440, y: 465 },
      3: { x: 440, y: 226 },
      4: { x: 327, y: 123 },
      5: { x: 533, y: 123 }
  };

  const physicalMapHeight = 603;
  const physicalMapWidth = 870;

  // Create a new graph
  const g = new graphlib.Graph();

  // Add nodes and edges - DIRECTED GRAPH
  g.setNode('1');
  g.setNode('2');
  g.setNode('3');
  g.setNode('4');
  g.setNode('5');
  g.setEdge('2', '1', { weight: 162 });
  g.setEdge('1', '2', { weight: 162 });
  g.setEdge('1', '3', { weight: 201 });
  g.setEdge('3', '1', { weight: 201 });
  g.setEdge('3', '4', { weight: 214 });
  g.setEdge('4', '3', { weight: 214 });
  g.setEdge('3', '5', { weight: 170 });
  g.setEdge('5', '3', { weight: 170 });
  g.setEdge('4', '5', { weight: 240 });
  g.setEdge('5', '4', { weight: 240 });


// evaluate and show the route
function validate() {
    if (!graphlib || !graphlib.alg || !graphlib.alg.dijkstra) {
        console.error('graphlib or graphlib.alg.dijkstra not loaded.');
        return;
    }

    
    const dotsContainer = document.getElementById('dots');

    // Fucntion to Create dots for each coordinate
    function createDot(nodeNum, color, isSource, isDst) {
      const dot = document.createElement('div');
      dot.className = 'dot';

      
      const image = document.querySelector('#graphImage');
      const imageWidth = image.clientWidth;
      const dots = document.querySelector('#dots');
      dots.style.width = `${imageWidth}px`

      dot.style.left = `${coordinates[nodeNum].x / physicalMapWidth * 100}%`;
      dot.style.top = `${coordinates[nodeNum].y / physicalMapHeight * 100}%`;
      dot.style.backgroundColor = color; // Set color based on path status
      dot.title = `Node ${nodeNum}`; // Optional: Add tooltip
      if(isSource)  // if source make square
          dot.style.borderRadius= '0%';
      if(isDst) { // if destination make larger
        dot.style.width = '2vh';
        dot.style.height = '2vh';
      }
        
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
    const shortestPaths = graphlib.alg.dijkstra(g, startNode);

    // Function to get the shortest path from start to end nodes
    function getPath(start, end) {
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
  
    const path = getPath(startNode, endNode);
    const isNewRoute =  localStorage.getItem('isRouteNew');
    if(startNode == endNode) {
        displayArea.textContent = "You have arrived at the destination!";
    }
    else if(isNewRoute == "false") {
      // check if new route is a sub-route of the previous one
      var prevPath = localStorage.getItem('currentPath');
      var messageToUser = "";
      if(prevPath.includes(startNode)) {      // if it is, print "your'e in the correct direction"
        messageToUser = "Your'e in the correct direction!";
      } else {
        messageToUser = "Route had been adjusted";
      }
      displayArea.textContent = messageToUser;

    }
    
    localStorage.setItem('currentPath', path);

    console.log(`Shortest path from ${startNode} to ${endNode}:`, path);
    
    // Create dots and color based on path status
    for (let nodeNum in coordinates) {
        if (path.includes(nodeNum)) {
            createDot(nodeNum, 'green', (nodeNum == startNode), (nodeNum == endNode)); // Node is in the path
        } else {
            createDot(nodeNum, 'red', (nodeNum == startNode), (nodeNum == endNode)); // Node is not in the path
        }
    }
}

function clearDots() {
  if(document.querySelectorAll('.dot').length > 0) {
    document.querySelectorAll('.dot').forEach(dot => dot.remove());
  }
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
        localStorage.clear();
        // location.reload(); 
        clearDots();
        popup();
    });
    popup();
});

