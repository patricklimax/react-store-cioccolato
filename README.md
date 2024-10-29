# React Store Cioccolato 🍫

Bem-vindo ao **React Store Cioccolato!** Este projeto foi desenvolvido para oferecer uma experiência de compra completa e intuitiva para uma loja de chocolates, doces e confeitos. A aplicação permite que os usuários explorem o cardápio, escolham produtos com diferentes opções de personalização, e finalizem suas compras com pagamento via QR Code Pix.

## 📋 Visão Geral

O projeto conta com um site para apresentação da loja e uma página de menu/cardápio onde os usuários podem: <br>

- Navegar entre as categorias de produtos. <br>
- Escolher um produto e personalizá-lo com sabor, recheio, massa, cobertura e adicionais.<br>
- Adicionar produtos ao carrinho, revisar o pedido e realizar o checkout.<br>
- Gerar um QR Code para pagamento via Pix.<br>
- Enviar o pedido finalizado para o WhatsApp da loja.<br>

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:<br>

- **React** + **Next.js**: estrutura principal da aplicação.<br>
- **Tailwind CSS**: estilização rápida e responsiva.<br>
- **TypeScript**: segurança e consistência de código.<br>
- **ShadCN UI**: biblioteca de componentes UI altamente customizável.<br>
- **Lucide Icon**: biblioteca de ícones flexível.<br>
- **Next Themes**: alternância entre temas claro e escuro.<br>
- **Pix-utils**: utilitário para gerar QR Codes Pix para pagamento.<br>
- **qrcode.react**: biblioteca para geração de QR Codes.<br>
- **React Copy Clipboard**: cópia de dados para a área de transferência (ex. chave Pix).<br>
- **Zod**: validação e formatação de dados dos formulários.<br>
- **React Hook Form**: gerencia e valida os dados de formulários.<br>
- **Zustand**: gerenciador de estado global leve e intuitivo.<br>
- **LocalStorage**: persistência de dados no navegador.<br>

## ⚙️ Funcionalidades

**Site**
Com a apresentação do negócio, categorias de produtos, um pouco sobre a empresa, parceiros, etc.<br>

Além disso... <br>

1. **Exploração e Navegação no Cardápio**: <br>
   - Navegação entre categorias de produtos.<br>
   - Exibição de informações detalhadas de cada produto.<br>
   
2. **Personalização de Produtos**:<br>
   - Seleção de sabor, recheio, massa, cobertura e adicionais.<br>

3. **Carrinho de Compras**:<br>
   - Adição de produtos ao carrinho, com possibilidade de revisão do pedido.<br>

4. **Checkout e Pagamento**:<br>
   - Formulário para dados do usuário e endereço.<br>
   - Geração automática de QR Code Pix para pagamento.<br>

5. **Envio para WhatsApp**:<br>
   - O pedido, contendo descrição minuciosa de cada item, cópia do qrcode-PIX, valor total e forma de pagamento, fazem parte da mensagem do pedido, que é enviada para o WhatsApp da loja.<br>

## 🎨 Alternância de Temas

A aplicação suporta temas claro e escuro, com a funcionalidade de alternância de tema gerida por **Next Themes**.<br>

# 📦 Instalação e Configuração

## 🚀 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/react-store-cioccolato.git
   cd react-store-cioccolato

2. **Instale as dependências:**
    ```npm install

3. **Execute o projeto:**
    ```npm run dev

**Acesse o projeto no navegador em http://localhost:3000**


# 🤝 Contribuições
Contribuições são bem-vindas! Por favor, abra um pull request ou reporte issues para sugestões de melhorias ou correções. <br>


# 📄 Licença
Este projeto é licenciado sob a MIT License.











## Desenho da Aplicação

Site
-Home
-Um pouco das Delícias
-História da Empresa
-Parceiros
-Localização e contato

### Produtos

### Brigadeiros:

id
name
category: gourmet | tradicional
quantity: 12 | 25 | 50 | 100
description
flavors
qdeFlavors
imgUrl

### Ovos de Pascoa

Biscoitinhos
Cookies
Sorvetes
donuts

Página de Produtos/Pedidos

#Menu
-Mesmo para site e loja
-Menu de abrir com as oções home e fazer pedidos
-Botão tema de cores
-botão do carinho

#Carrinho
-detalhes dos produtos escolhidos
-com quantidade, sabores, etc
-mostra valor total por item
-mostra valor total do carrinho
-botão de continuar comprando
-botão de finalizar compra
-redireciona para página de checkout

-opção de entrega: cliente paga o entrega

#Páginde detalhes do produto
-abre mostrando os detalhes do produto
-cliente seleciona os sabores
-adiciona produto ao carrinho
-abre carrinho com resumo do pedido e opção de finalizar compra/continuar comprando

#Página de Checkout
-Resumo do pedido com imagem e demais itens
-etapas do checkout
identificação do cliente
endereço
forma de pagamento (pix, dinheiro, débito, crédito,)
em caso de dinheiro, informar o valor para troco
mensagem: pagamento de 50% para confirmação do pedido e do pagamento do frente
enviar pedido para whatsapp

na tela de cadastro selecionar primeiro o produto

remodelar site

criar página de checkout
--criar três etapas
  -nome e telefone
  -forma de entrega e endereço completo
  -forma de pagamento: 50% pix, gerar qr code: resto na entrega
  inserir mensagem de compartilhamento de dados e botão de enviar pedido
  após isso, informar que o pedido será confirmado mediante envio de comprovante de pagamento
  acompanhar via whatsapp
  
criar página do carrinho -  mostrar detalhes dos produtos
No cart menu, ver produtos sem muitos delalhes
criar opção de editar pedido


Ao clicar no botão Fazer pedido, você confirma que leu, entendeu e aceita nossos Termos de Uso, Termos de Venda e Política de Devolução e reconhece que leu a Política de Privacidade da Medusa Store.