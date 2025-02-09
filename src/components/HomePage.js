import React from 'react'
import { motion } from 'framer-motion';
import buildingImage from "../images/building.jpg"
import reactImage from "../images/react.jpg"
import jsImage from "../images/js.jpg"
import pythonImage from "../images/python.jpg"
import pictgramImage from "../images/pictgram.jpg"

const HomePage = () => {
  return (
    <div className="container text-center">
      <motion.div initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}>
        <div class="top">
          <img src={buildingImage} className="buildingImage" alt="" />
          <p>it's time to build</p>
        </div>
      </motion.div>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル一覧</h1>
          <ul class="skill-list">
            <li class="col">
              <img src={reactImage} alt="" />
              <h4>React</h4>
              <p>学習中</p>
            </li>
            <li class="col">
              <img src={jsImage} alt="" />
              <h4>HTML/CSS</h4>
              <p>学習中</p>
            </li>
            <li class="col">
              <img src={pythonImage} alt="" />
              <h4>Python</h4>
              <p>使用できます</p>
            </li>
          </ul>
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
              インフラからバックエンド、フロントサイドまで幅広く業務を経験してきました。
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