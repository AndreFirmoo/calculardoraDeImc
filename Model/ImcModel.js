class ImcModel{
    constructor(nome, idade, altura, peso){
        this._nome = nome
        this._idade = idade
        this._altura = altura
        this._peso = peso
    }

    get imc(){

        return  this._peso / (this._altura * this._altura)
    }

    get nome(){
        return this._nome
    }
    get idade(){
        return this._idade
    }
    get altura(){
        return this._altura
    }
    get peso(){
        return this._peso
    }
}