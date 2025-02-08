import React from 'react'
import buildingImage from "../images/building.jpg"
import reactImage from "../images/react.jpg"
import jsImage from "../images/js.jpg"
import pythonImage from "../images/python.jpg"
import pictgramImage from "../images/pictgram.jpg"

const HomePage = () => {
  return (
    <div className="container text-center">
      <div class="top">
        <img src={buildingImage} className="buildingImage" />
        <p>it's time to build</p>
      </div>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル一覧</h1>
          <ul class="top-banner">
            <li class="col">
              <img src={reactImage} />
              <h4>React</h4>
              <p>学習中</p>
            </li>
            <li class="col">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>学習中</p>
            </li>
            <li class="col">
              <img src={pythonImage} />
              <h4>Python</h4>
              <p>python使用できます</p>
            </li>
          </ul>
        </div>
      </section>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <ul>
              <li>
                <div class="col-md-4">
                  <h4 class="my-3">ECサイト</h4>
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                    maxime quam architecto quo inventore harum ex magni, dicta
                    impedit.
                  </p>
                </div>
              </li>
              <li>
                <div class="col-md-4">
                  <h4 class="my-3">レスポンシブサイト</h4>
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                    maxime quam architecto quo inventore harum ex magni, dicta
                    impedit.
                  </p>
                </div>
              </li>
              <li>
                <div class="col-md-4">
                  <h4 class="my-3">ウェブセキュリティ</h4>
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                    maxime quam architecto quo inventore harum ex magni, dicta
                    impedit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div class="aboutme">
        <h2>About me</h2>
        <div class="row">
          <div class="col">
            <img src={pictgramImage}></img>
            <p class="text">石川県出身のエンジニア。
              高専で機械工学、技科大で材料工学を学んだのち、メーカーで温度センサーの材料開発・生産に従事。
              その後ITの技術にひかれ、31才でIT業界へ転職。運用・テクニカルサポートからキャリアをスタートし、
              AWSクラウドサーバー構築、Webページ作成、Python/djangoのツール改修など、
              インフラからフロントサイドまで幅広く業務を経験してきました。
            </p>
          </div>
          <ul>
            <li>
              "-Github: "
              <a href="https://github.com/Kni4mo10">https://github.com/Kni4mo10</a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage