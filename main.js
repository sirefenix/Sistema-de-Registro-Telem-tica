const { app, BrowserWindow, Tray } = require('electron')

let win



function createWindow() {

    //Creamos la interfaz de la ventana
    win = new BrowserWindow({
        width: 1920,
        height: 1080,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logotipo/icono.ico`
    })


    win.loadURL(`file://${__dirname}/dist/index.html`)

    //Herramientas de Desarrollador
    win.webContents.openDevTools()


    //Evento para cerrar la ventana
    win.on('closed', function() {
        win = null
    })


}


//Inicializamos la ventana de electron
app.on('ready', createWindow)

//Quitamos las funciones de la ventana cuando la cerramos
app.on('window-all-closed', function() {

    //Para macOS
    if (process.platform != 'darwin') {
        app.quit()
    }
})


app.on('activate', function() {

    //Para macOs
    if (win === null) {
        createWindow()
    }
})