/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;


class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('doc3.html')}>Teste</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Para ter acesso a desevonlvedora com menos bugs</h2>
        <p><a href="https://ubisoftconnect.com/pt-BR/?isSso=true&refreshStatus=noLoginData"> Clique aqui</a></p>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'Esta semana na epic games estão de Graça os jogos For de King e Metro Last Night Redux.'
              + 'Para ter acesso a estes jogos acesse <a href ="https://www.epicgames.com/store/pt-BR/free-games"> este link </a>.',
            image: `${baseUrl}img/epic_games.png`,
            imageAlign: 'right',
            title: 'Jogos Gratuitos da Epic Games esta semana',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="dark">
        {[
          {
            content:
              'Matopiba é um mapa brasileiro, baseado na região nordeste do Brasil. Além de ser um mapa enorme,' +
              ' ele traz novos tipos de cultura para o jogo, como o black bean (feijão preto)por exemplo.',
            image: `${baseUrl}img/Mapa_matopiba.jpg`,
            imageAlign: 'right',
            title: 'Matopiba, um enome mapa para o jogo Farming Simulator 19',
          },
        ]}
      </Block>
    );
    const LearnHow2 = () => (
      <Block background = "light">
        {[
          {
            content:
              'Neste fim de semana Insurgency Sandstorme esta gratuito para teste (até dia 8).'
              + '<a href="https://store.steampowered.com/app/581320/Insurgency_Sandstorm/"> Saiba mais clicando aqui </a>',
            image: `${baseUrl}img/insurgency_sandstorm.gif`,
            imageAlign: 'left',
            title: 'Fim de Semana Gratuito',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: '<a href = "https://www.pichau.com.br/">Pichau informatica </a>',
            image: `${baseUrl}img/computador.png`,
            imageAlign: 'top',
            title: 'Quer comprar ou montar o seu PC?',
          },
          {
            content: '<a href="https://store.steampowered.com/?l=portuguese"> Steam </a>',
            image: `${baseUrl}img/Steam.jpg`,
            imageAlign: 'top',
            title: 'Deseja encontrar os melhores jogos para o seu computador?',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>O que mais temos para apresentar?</h2>
          <p>Muitas outras novidades e outros assuntos relacionados a jogos</p>
          <div className="logos">{showcase}</div>
          <div className="Saiba mais">
            <a className="button" href={pageUrl('users.html')}>
              Saiba Mais
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <LearnHow2/>
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
