// imagens do jogo
let imagemDaEstrada
let imagemDoAtor
let imagemCarro
let imagemCarro2
let imageCarro3

//sons do jogo
let somTrilha
let somColisao
let somPonto

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/ator-1.png")
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,   imagemCarro, imagemCarro2, imagemCarro3]
  
  somTrilha = loadSound ("som/trilha.mp3")
  somColisao = loadSound ("som/colidiu.mp3")
  somPonto = loadSound ("som/pontos.wav")
}