class ImcView {

    constructor(elementoDOM){
        this.elementoDOM = elementoDOM
    }
    
    template(modelo){
        return `
            ${modelo.imc.map(imc => {
                return `
                <tr class="table--information-tr">
                    <td class="table--information-td">${imc.nome}</td>
                    <td class="table--information-td">${imc.idade}</td>
                    <td class="table--information-td">${imc.altura}</td>
                    <td class="table--information-td">${imc.peso}</td>
                    <td class="table--information-td">${imc.imc.toFixed(2)}</td>
                </tr> 
                
                `
            }).join('')}
                             
        `
    }
    update(modelo){
        this.elementoDOM.innerHTML = this.template(modelo)
    }
}