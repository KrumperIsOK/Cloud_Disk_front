import request from "@/util/request";

// 1获取文件夹列表
function getFileListApi(file) {
    return request({
        url: "./cloudfiles/file-list",
        // url: "./data/file-list.json",
        params: file,
    });
}

// 2新增文件夹
function addFolderApi(data) {
    return request({
        url: "./data/add-file.json",
        data
    });
}

// 4获取全部文件夹
function getAllFoldersApi(data) {
    return request({
        url: "./cloudfiles/file-list-all",
        data
    });
}

// 6删除文件|文件夹
function delFileApi(data) {
    return request({
        url: "./data/del-file.json",
        data
    });
}

// 8下载数据
function downloadDataApi(filePath) { //TODO 传入文件信息请求下载数据
    return request({
        url: "./cloudfiles/download",
        responseType: "blob",
        params: { filePath: filePath },
    });
}

// 9文件夹移动
function fileMoveApi(data) {
    return request({
        url: "./data/move-file.json",
        data
    });
}

function testApi(data) {
    return request({
        method: "POST",
        url: "./cloudfiles/download",
        params: { filePath: "Users/Peng/root/UniOpmClient_Setup for win10.exe" },
        data
    })
}

function fileUpload(data) {
    return request({
        method: "POST",
        url: "./cloudfiles/FileUpload",
        data
    })
}

export {
    getFileListApi, // 1获取文件夹列表
    addFolderApi, // 2新增文件夹
    getAllFoldersApi, // 4获取全部文件夹
    delFileApi, // 6删除文件|文件夹
    downloadDataApi, // 8下载数据
    fileMoveApi, // 9文件夹移动
    testApi,
    fileUpload
};