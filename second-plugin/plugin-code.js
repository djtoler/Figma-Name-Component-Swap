"use strict";

figma.showUI(__html__, { width: 400, height: 300 });

figma.ui.onmessage = (msg) => {
  console.log(msg);

  // ************RENAME A LAYER**************
  if (msg.type === "change-name") {

    // Make a function that returns the name of the layer that you want to change
    const layerNameToChange = figma.currentPage.findOne(n => n.name === msg.selectedNameOfLayer)
    
    // Set the name of that layer to the name entered in the target name input box (targetNameOfLayer)
    layerNameToChange.name = msg.targetNameOfLayer;
    return layerNameToChange.name
  }

  // ************SWAP A LAYER WITHA COMPONENT**************
  if (msg.type === "swap-component") {

    // Make a function that returns the selected layer that you want to replace
    function returnLayerNode() {
      return figma.currentPage.findOne(n => n.name === msg.nameOfLayerToReplace)
    }

    // Make a function that returns a component that you will use to replace the selected layer
    function returnComponentNode() {
      return figma.currentPage.findOne(n => n.name === msg.nameOfReplacementComponent)
    }

    // Store the layer to be replace and the replacement component in variables
    const replacementComponent = returnComponentNode();
    const layerToReplace = returnLayerNode();

    // Make a function that returns a copy of a component. This copy will be used to replace a selected layer
    function returnComponentClone(componentNode) {
      return componentNode.clone();
    }

    // Make a function that replaces a selected layer with a component
    function replaceLayerWithComponentClone(componentNode, layerNode) {

      // Use the clone function to make a copy of the component that you will be using to replace a selected layer
      const newComponentClone = returnComponentClone(componentNode);

      // This is the selected layer that will be replaced with the copy of a component called newComponentClone
      const layerToReplace = layerNode;

      // Set the coordinates & name of the newComponentClone to the same coordinates & name of the layer being replaced ('layerToReplace')
      newComponentClone.x = layerToReplace.x;
      newComponentClone.y = layerToReplace.y;
      newComponentClone.name = layerToReplace.name;

      // Append the newComponentClone at the same hierarchical level as the layer that you're replacing
      const parentOfLayerToReplace = layerNode.parent;
      parentOfLayerToReplace.appendChild(newComponentClone);

      // Finally, remove the layerNode & return the clone of the component
      layerToReplace.remove();
      return newComponentClone;
    }

    // Run the replacement function after you pass it a component node and a layer node
    replaceLayerWithComponentClone(replacementComponent, layerToReplace);

    // Close the plugin after running the replacement function
    figma.closePlugin();
  }
};
