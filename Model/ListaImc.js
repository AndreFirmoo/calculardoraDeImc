class ListaImc{
    
    constructor(){
        this._imcs = []
    }

    adiciona(imc){
        this._imcs.push(imc)
    }

    get imc(){
        return [].concat(this._imcs)
    }
}