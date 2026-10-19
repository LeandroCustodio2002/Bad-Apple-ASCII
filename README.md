<div align="center">

# 🍎 Bad Apple!! em ASCII

**O clipe de Bad Apple!! tocando inteiro em arte ASCII, direto no navegador.**

![p5.js](https://img.shields.io/badge/p5.js-ED225D?logo=p5dotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

<img src="image.png" alt="Frame de Bad Apple!! renderizado em caracteres ASCII" width="800">

### 🔗 [Ver a demo ao vivo](https://leandrocustodio2002.github.io/Bad-Apple-ASCII/)

</div>

---

## 🎬 O que é

Uma página que toca o vídeo de **Bad Apple!!** e redesenha cada frame como texto. O vídeo fica escondido e o que aparece na tela é só um grid de caracteres, atualizado a cada frame.

## ⚙️ Como funciona

1. **Lê o vídeo frame a frame** com o `createVideo` do p5.js.
2. **Reduz o frame** num canvas fora da tela com **120 colunas**. A altura sai da proporção do vídeo, com um ajuste porque os caracteres são mais altos do que largos.
3. **Calcula o brilho de cada pixel** pela média de R, G e B.
4. **Troca o brilho por um caractere** da rampa abaixo. Quanto mais claro o pixel, mais "cheio" o caractere:

   ```
   Ñ@#W$9876543210?!abc;:+=-,._
   ```

5. **Pinta cada caractere com a cor original do pixel** e monta o frame em HTML.

Quando a janela muda de tamanho, o grid é recalculado.

## ▶️ Como rodar localmente

O navegador bloqueia a leitura de pixels de vídeo aberto direto pelo `file://`, então sirva a pasta com um servidor local:

```bash
git clone https://github.com/LeandroCustodio2002/Bad-Apple-ASCII.git
cd Bad-Apple-ASCII
npx serve .
```

Depois abra o endereço que aparecer no terminal e clique em **▶ Play Bad Apple**.

## 📁 Estrutura

| Arquivo | Função |
|---|---|
| `index.html` | Página e import do p5.js |
| `script.js` | Leitura do vídeo e conversão para ASCII |
| `style.css` | Estilo da página |
| `badApple.mp4` | Vídeo original |

## 🙏 Créditos

*Bad Apple!!* é uma música da série Touhou Project (ZUN), na versão do Alstroemeria Records com vocal de nomico. O vídeo de sombras é um projeto de fãs. Este repositório é só um estudo de creative coding.
