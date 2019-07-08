# Nubank Layout

## Sobre o Projeto
Neste projeto feito em React Native foi criado uma cópia do layout do aplicativo Nubank com o intuito de aprender sobre Styled Components e Animações.

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade da comunidade do React Native de uma navegação de forma fácil de se usar e escrita toda em JavaScript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [React Native Veactor Icons](https://github.com/oblador/react-native-vector-icons) - Utilizado para adicionar ícones personalizáveis a projetos React Native;
- [Styled Components](https://github.com/styled-components/styled-components) - Permite escrever código CSS real para estilização dos componentes;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [React Native QRCode](https://github.com/cssivision/react-native-qrcode) - Um componente utilizado para gerar QRcode;
- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

## Começando

Para conseguir utilizar o projeto, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

É ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia
criado pela RocketSeat no link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Instalação

1. Copie ou clone os arquivos deste repositório para uma pasta local.

2. Acesse a pasta local do projeto através de um terminal e faça a instalação das dependências usando o comando:

```sh
yarn install

// Utilize o npm install se preferir
```

3. Um passo adicional no Android: É necessário algumas configurações para que o React Native Gesture Handler funcione corretamente em 
ambiente Android, os passos para essas configurações podem ser encontrados no guia do React Native Gesture Handler através do link 
a seguir: [Configuração do React Native Gesture Handler para Android.](https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#android)

4. Após o emulador iniciado ou o dispositivo conectado, execute o comando abaixo no terminal:

```sh
// Para Android:
react-native run-android

// Para iOS:
react-native run-ios
```

#### A aplicação será instalada no dispositivo ou emulador e deve parecer com as imagens abaixo.

<p align="center">
  <img src="https://user-images.githubusercontent.com/48105879/60809503-33889700-a161-11e9-90f2-cb92cfc8c73a.jpg" width="350" title="Imagem 1">
  <img src="https://user-images.githubusercontent.com/48105879/60809504-33889700-a161-11e9-9380-82f907886903.jpg" width="350" title="Imagem 2">
</p>



<p align="center">
:blush:
</p>

