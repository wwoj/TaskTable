const LocalStorageName = "__taskApplication__List";

export function getLocalData()
{
    var jsonList= localStorage.getItem(LocalStorageName);
    return JSON.parse(jsonList);
}

export function saveLocalData(list)
{
    let jsList = JSON.stringify(list);
    localStorage.setItem(LocalStorageName, jsList);
}