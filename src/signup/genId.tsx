export default function randomGenString(){
    const alpanum=["a","b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
    const randm= `0x${alpanum[Math.floor(alpanum.length*Math.random())]}${Math.floor(alpanum.length*Math.random())}${alpanum[Math.floor(alpanum.length*Math.random())]}${alpanum[Math.floor(alpanum.length*Math.random())]}${alpanum[Math.floor(alpanum.length*Math.random())]}${alpanum[Math.floor(alpanum.length*Math.random())]}${Math.floor(alpanum.length*Math.random())}${alpanum[Math.floor(alpanum.length*Math.random())]}${Math.floor(alpanum.length*Math.random())}${alpanum[Math.floor(alpanum.length*Math.random())]}${Math.floor(alpanum.length*Math.random())}${alpanum[Math.floor(alpanum.length*Math.random())]}${Math.floor(alpanum.length*Math.random())}${alpanum[Math.floor(alpanum.length*Math.random())]}${Math.floor(alpanum.length*Math.random())}`
    return randm;
}