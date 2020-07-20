
class ImcController{

    constructor(){
        this._inputNome = document.querySelector('#input--name')
        this._inputIdade  = document.querySelector('#input--age')
        this._inputPeso  = document.querySelector('#input--weight')
        this._inputAltura  = document.querySelector('#input--height')
        this._listaImc =  new ListaImc()
        this._ImcView = new ImcView(document.querySelector("#tbody"))
        this._ImcView.update(this._listaImc)
    }
    
    adicionarPessoa(event){
        
        
        this._listaImc.adiciona(this.criarIMC())
        this._ImcView.update(this._listaImc)
    }

    criarIMC(){
       
        return new ImcModel(this._inputNome.value,
                            this._inputIdade.value,
                            this._inputAltura.value,
                            this._inputPeso.value)
    }

}
