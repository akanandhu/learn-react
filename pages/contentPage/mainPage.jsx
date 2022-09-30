import next from "next";
import Head from "next/head";
import styles from './mainPage.module.css';
import Image from 'next/image';
import model from '/public/images/Rectangle20.png';
import star from '/public/images/star.png';
import nostar from '/public/images/dark-star.png.png';
import love from '/public/images/love.png.png';
import ellipse from '/public/images/Ellipse8.png'
import ellipse1 from '/public/images/Ellipse9.png'
import ellipse2 from '/public/images/Ellipse10.png'
import leftArrow from '/public/images/left-arrow1.png';
import Link from "next/link";
import React from "react";


function mainPage() {
  return (
    <div>
        <Head>
          <title>Content Page</title>
        </Head>
        <main>
        
          <div className={styles.bodyContainer}>
            <div className={styles.boxContainer}>
              <div className={styles.cardImage}>
                
              <Image src={model} />
              </div>
              
              <div className={styles.cardDetail}>
                <div>
                  <div className={styles.dots}>
                    <Image src={ellipse}/>
                    <Image src={ellipse1}/>
                    <Image src={ellipse2}/>
                  </div>

                  <div className={styles.heading}>
                  <h1>US POLO ASSN</h1>
                  <p>Msfsf Grey</p>
                  </div>
                </div>
                <div className={styles.jacketText}>
                    Jacket
                </div>
                <div className={styles.priceList}>
                  <p className={styles.lowRate}>&#8377; 3999</p>
                  <p className={styles.highRate}>&#8377; 4999</p>
                  <p className={styles.offer}>50% off</p>

                </div>
                <div className={styles.star}>
                    <Image className={styles.stars} src={star}/>
                    <Image className={styles.stars} src={star}/>
                    <Image className={styles.stars} src={star}/>
                    <Image className={styles.stars} src={star}/>
                    <Image className={styles.stars} src={nostar}/>
                </div>

              </div>
              <div className={styles.cardSelection}>
                <div className={styles.colourText}>
                  Colours
                </div>
                <div className={styles.colours}>
                  <div className={styles.colorBox} id={styles.orange}></div>
                  <div className={styles.colorBox} id={styles.pink}></div>
                  <div className={styles.colorBox} id={styles.black}></div>
                  <div className={styles.colorBox} id={styles.blue}></div>
                  <div className={styles.colorBox} id={styles.grey}></div>
                </div>
                <div className={styles.sizeText}>
                  Size
                </div>
                <div className={styles.sizes}>
                 <button className={styles.sizeBox} >XS</button>
                  <button className={styles.sizeBox}>S</button>
                  <button className={styles.sizeBox}>M</button>
                  <button className={styles.sizeBox}>L</button>
                  <button className={styles.sizeBox}>XL</button>
                </div> 
                <div className={styles.cta}>
                  
                    <button>Add to Bag</button>
                    <div className={styles.loveRound}>
                      <Image src={love} className={styles.love}/>
                    </div>
                  <div>

                  </div>
                </div>               
              </div>

            </div>
          </div>
        </main>
       
    </div>
  )
}

export default mainPage
