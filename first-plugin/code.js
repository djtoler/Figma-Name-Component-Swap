function runPlugin() {

    let selectedElements = figma.currentPage.selection.length
    let selectedName = figma.currentPage.selection[0].name
    let selected = figma.currentPage.selection
    let currentPage = figma.currentPage.name
    let children = figma.currentPage.selection[0].children

    console.log(selectedName, "<<--- figma.currentPage.selection[0].name");
    console.log(selected, "<<--- figma.currentPage.selection");
    console.log(selected [0].componentPropertyReferences, 'cpr');
    console.log(figma.currentPage.selection[0].id, "<<--- selection id"); 
    console.log(figma.currentPage.selection[0].parent, "<<--- selection parent"); 
    console.log(figma.currentPage.selection[0].children, "<<--- selection childern"); 
    console.log(figma.currentPage.selection[0].x, figma.currentPage.selection[0].y,"<<--- coords"); 

    // console.log(selected[0].description, "<<--- figma.currentPage.selection description");
    // console.log(figma.currentPage.selection[0].meta.fields, "<<--- figma.currentPage.selection documentationLinks");

    console.log(currentPage, "<<--- figma.currentpage");
    // console.log(children, "<<--- figma.currentPage.selection[0].children");
    // console.log(children.length, "<<--- figma.currentPage.selection[0].children");
    // console.log(children[0].componentPropertyDefinitions,"<<--- componentPropertyReferences");

    

    if(selectedElements === 0) {
        figma.closePlugin('No element selected!')
        return
    }

    // function rename(newName) {
    //     figma.currentPage.selection[0].name = newName;
    //     console.log(figma.currentPage.selection[0].name);
    //     return figma.currentPage.selection[0].name
    // }



    // rename('newRecName2')

    

    figma.closePlugin("Job Done")
    console.log("----------------------------------------------");
    return
}

runPlugin()

