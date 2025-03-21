import React from 'react'
import { motion } from 'framer-motion';
import buildingImage from "../images/building.jpg"
import htmlImage from "../images/html.svg"
import pictgramImage from "../images/pictgram.jpg"
import jsImage from "../images/js.svg"
import cssImage from "../images/css.svg"
import javaImage from "../images/java.svg"
import pythonImage from "../images/python.png"
import databaseImage from "../images/database.svg"
import reactImage from "../images/react.svg"
import djangoImage from "../images/django.png"
import springImage from "../images/spring.png"
import dockerImage from "../images/docker.svg"
import linuxImage from "../images/linux.svg"
import awsImage from "../images/aws.svg"
import ciscoImage from "../images/cisco.png"
import windowsImage from "../images/windows.svg"
import githubImage from "../images/github.svg"

const HomePage = () => {
  return (
    <div className="container text-center">
      <motion.div
        className="figure2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.8 }}>
        <div class="top">
          <img src={buildingImage} className="buildingImage" alt="" />
          <motion.div
            className="figure2"
            initial={{ x: 10, y: -500 }}
            animate={{ x: 10, y: -225 }}
            transition={{ duration: 1.5, delay: 1.4 }}>
            <p>it's time to build</p>
          </motion.div>
        </div>
      </motion.div>

      <section id="skill">
        <div class="inner">
          <div class="section-title-area">
            <h2 class="section-title">SKILL</h2>
            <div class="section-intro">
              日々精進していきます！<br />
              以下チャートは各スキルごとの得意度をレートで示しています。
            </div>
          </div>
        </div>
        <div class="inner">
          <div class="section-title-area">
            <h3 class="section-title section-skill">FRONT-END</h3>
          </div>
        </div>
        <div class="inner">
          <div class="section-body card-wrapper">
            <div class="card">
              <div class="skill-icon">
                <img src={htmlImage} alt="HTML5"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">HTML5</h3>
                <div class="rating">
                  <div class="rate rate3"></div>
                </div>
                <div class="section-text">
                  HTMLの独学をきっかけにオープン系開発に興味を持ちました。
                </div>
              </div>
            </div>
            <div class="card">
              <div class="skill-icon">
                <img src={cssImage} alt="CSS3"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">CSS3</h3>
                <div class="rating">
                  <div class="rate rate3"></div>
                </div>
                <div class="section-text">
                  CSSの独学をきっかけにオープン系開発に興味を持ちました。
                </div>
              </div>
            </div>
            <div class="card">
              <div class="skill-icon">
                <img src={jsImage} alt="JavaScript"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">JavaScript</h3>
                <div class="rating">
                  <div class="rate rate2"></div>
                </div>
                <div class="section-text">
                  JavaScriptの独学をきっかけにオープン系開発に興味を持ちました。
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="inner">
          <div class="section-title-area">
            <h3 class="section-title section-skill">BACK-END</h3>
          </div>
        </div>
        <div class="inner">
          <div class="section-body card-wrapper">
            {/*add cards start */}
            <div class="card">
              <div class="skill-icon">
                <div class="pythonImg">
                  <img src={pythonImage} alt="Python"></img>
                </div>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">Python</h3>
                <div class="rating">
                  <div class="rate rate3"></div>
                </div>
                <div class="section-text">
                  文法が簡単という理由でPythonから学習し始めました。
                </div>
              </div>
            </div>

            <div class="card">
              <div class="skill-icon">
                <img src={javaImage} alt="Java"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">Java</h3>
                <div class="rating">
                  <div class="rate rate3"></div>
                </div>
                <div class="section-text">
                  Javaを通してオブジェクト指向を学習。
                </div>
              </div>
            </div>
            {/*Add Cards end*/}
          </div>
        </div>

        {/*FW*/}
        <div class="inner">
          <div class="section-title-area">
            <h3 class="section-title section-skill">FW</h3>
          </div>
        </div>
        <div class="inner">
          <div class="section-body card-wrapper">
            {/*add cards start */}
            <div class="card">
              <div class="skill-icon">
                <img src={djangoImage} alt="django"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">Django</h3>
                <div class="rating">
                  <div class="rate rate2"></div>
                </div>
                <div class="section-text">
                  Pythonのフレームワークで、モダンな現場でも対応できるよう学習中。
                </div>
              </div>
            </div>
            <div class="card">
              <div class="skill-icon">
                <img src={springImage} alt="spring"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">Spring</h3>
                <div class="rating">
                  <div class="rate rate3"></div>
                </div>
                <div class="section-text">
                  Webアプリケーション構築時にspringフレームワークを使用しました。
                </div>
              </div>
            </div>
            <div class="card">
              <div class="skill-icon">
                <img src={reactImage} alt="Reactjs"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">React</h3>
                <div class="rating">
                  <div class="rate rate2"></div>
                </div>
                <div class="section-text">
                  絶賛学習中です。
                </div>
              </div>
            </div>
            {/*Add Cards end*/}
          </div>
        </div>

        {/*DB*/}
        <div class="inner">
          <div class="section-title-area">
            <h3 class="section-title section-skill">DB</h3>
          </div>
        </div>
        <div class="inner">
          <div class="section-body card-wrapper">
            {/*add cards start */}
            <div class="card">
              <div class="skill-icon">
                <img src={databaseImage} alt="DB"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">SQLServer</h3>
                <div class="rating">
                  <div class="rate rate2"></div>
                </div>
                <div class="section-text">
                  絶賛学習中。
                </div>
              </div>
            </div>
            <div class="card">
              <div class="skill-icon">
                <img src={databaseImage} alt="DB"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">MySQL</h3>
                <div class="rating">
                  <div class="rate rate1"></div>
                </div>
                <div class="section-text">
                  DATABASEを学ぶにあたってとりあえずMySQLを選んだ。
                  絶賛学習中。
                </div>
              </div>
            </div>
            {/*Add Cards end*/}
          </div>
        </div>

        {/*Cloud*/}
        <div class="inner">
          <div class="section-title-area">
            <h3 class="section-title section-skill">CLOUD</h3>
          </div>
        </div>
        <div class="inner">
          <div class="section-body card-wrapper">
            {/*add cards start */}
            <div class="card">
              <div class="skill-icon">
                <img src={awsImage} alt="AWS"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">AWS</h3>
                <div class="rating">
                  <div class="rate rate2"></div>
                </div>
                <div class="section-text">
                  VPCやEC2やCloudFormationなどによるクラウドインフラ構築が可能です。
                </div>
              </div>
            </div>
            {/*Add Cards end*/}
          </div>
        </div>

        {/*Infra*/}
        <div class="inner">
          <div class="section-title-area">
            <h3 class="section-title section-skill">INFRA</h3>
          </div>
        </div>
        <div class="inner">
          <div class="section-body card-wrapper">
            {/*add cards start */}
            <div class="card">
              <div class="skill-icon">
                <img src={dockerImage} alt="docker"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">Docker/Docker Compose</h3>
                <div class="rating">
                  <div class="rate rate2"></div>
                </div>
                <div class="section-text">
                  インストールから簡単なコンテナの作成、コマンド操作が可能です。
                  CircleCiによる自動デプロイ、自動テストに挑戦中です。
                </div>
              </div>
            </div>
            {/*Add Cards end*/}
          </div>
        </div>

        {/*Network*/}
        <div class="inner">
          <div class="section-title-area">
            <h3 class="section-title section-skill">NETWORK</h3>
          </div>
        </div>
        <div class="inner">
          <div class="section-body card-wrapper">
            {/*add cards start */}
            <div class="card">
              <div class="skill-icon">
                <img src={ciscoImage} alt="Cisco"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">Cisco</h3>
                <div class="rating">
                  <div class="rate rate1"></div>
                </div>
                <div class="section-text">
                  絶賛学習中。
                </div>
              </div>
            </div>
            {/*Add Cards end*/}
          </div>
        </div>

        {/* OS*/}
        <div class="inner">
          <div class="section-title-area">
            <h3 class="section-title section-skill">OS</h3>
          </div>
        </div>
        <div class="inner">
          <div class="section-body card-wrapper">
            {/*add cards start */}
            <div class="card">
              <div class="skill-icon">
                <img src={linuxImage} alt="Linux"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">Linux(CentOS)</h3>
                <div class="rating">
                  <div class="rate rate1"></div>
                </div>
                <div class="section-text">
                  Dockerを使用するにあたって並行して学習。
                  基本的なコマンド操作は可能。
                </div>
              </div>
            </div>
            <div class="card">
              <div class="skill-icon">
                <img src={windowsImage} alt="Windows"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">Windows</h3>
                <div class="rating">
                  <div class="rate rate3"></div>
                </div>
                <div class="section-text">
                  インストールから環境設定、開発が可能。Windows11を使用しています。
                </div>
              </div>
            </div>
            {/*Add Cards end*/}
          </div>
        </div>

        {/*- Tool -*/}
        <div class="inner">
          <div class="section-title-area">
            <h3 class="section-title section-skill">TOOL</h3>
          </div>
        </div>
        <div class="inner">
          <div class="section-body card-wrapper">
            {/*add cards start */}
            <div class="card">
              <div class="skill-icon">
                <img src={githubImage} alt="github"></img>
              </div>
              <div class="skill-desc">
                <h3 class="skill-desc-title">GitHub</h3>
                <div class="rating">
                  <div class="rate rate3"></div>
                </div>
                <div class="section-text">
                  バージョン管理でよく使用されるため、独学しました。
                </div>
              </div>
            </div>
            {/*Add Cards end*/}
          </div>
        </div>
      </section>

      <div class="aboutme">
        <h2>About me</h2>
        <div class="row">
          <div class="col">
            <figure class="profile"><img src={pictgramImage} alt=""></img></figure>
            <p class="text">大阪府出身のエンジニア。
              ITの技術にひかれ、21才でIT業界へ転職。運用・テクニカルサポートからキャリアをスタートし、
              AWSクラウドサーバー構築、Webページ作成、Python/djangoのツール改修など、
              インフラからバックエンド、フロントサイドまで幅広く学習しています。
            </p>
          </div>
        </div>
      </div>
      <div class="url">
        <li>
          "-Github: "
          <a href="https://github.com/Kni4mo10">https://github.com/Kni4mo10</a>
        </li>
      </div>
    </div>
  )
}

export default HomePage