function Shoes(size, color, old) {
    this.size = size
    this.color = color
    this.old = old || false
    if(this.old){
        console.log(`${this.color}`+"已褪色")
    }else{
        console.log(`${this.color}還很新`)
    }
}

let nike = new Shoes('7','yellow',true)

console.log(nike);