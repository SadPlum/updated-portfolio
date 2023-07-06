import React from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import style from "../../styles/perfect-pup/About.module.scss";
import dogsImg from "./icons/dogs.jpg";
import pawIcon from "./icons/paw.png";

function about() {
  return (
    <>
      <main className={style.container}>
        <Header />
        <div className={style.wrap}>
          <div className={style["about"]}>
            <Image
              src={dogsImg}
              alt="Pictures of puppies"
              className={style["large-dog-img"]}
            />
            <section className={style["about-section"]}>
              <article className={style["about-main"]}>
                <h3 className={style["about-title"]}>Who we are</h3>
                <p className={style["about-description"]}>
                  In early 2021 we started Perfect Pup as a way to connect furry
                  friends looking for new homes and people with the space to
                  take them in. We are a animal rescue, non-profit located right
                  in the heart of NB. Our team is made up of dedicated dogs
                  lovers and a few generous volunteers.
                </p>
                <Image
                  src={pawIcon}
                  alt="paw icon"
                  className={style["paw-icon"]}
                />
              </article>
              <div className={style["about-points"]}>
                <h4 className={style["about-value-title"]}>Values</h4>
                <div className={style["about-values"]}>
                  <article className={style["about-sub"]}>
                    <h4 className={style["about-sub-title"]}>Trust</h4>
                    <p className={style["about-sub-description"]}>
                      Many of our dogs are rescues, and have trust issues. So we
                      create a bond of trust with them. This ensures they are
                      comfortable with us and their future homes.
                    </p>
                    <Image
                      src={pawIcon}
                      alt="paw icon"
                      className={style["paw-icon"]}
                    />
                  </article>
                  <article className={style["about-sub"]}>
                    <h4 className={style["about-sub-title"]}>Patience</h4>
                    <p className={style["about-sub-description"]}>
                      Not all dogs are the same. Much like humans, some dogs
                      require more attention and have different needs. We must
                      treat them with love, patience and understanding.
                    </p>
                    <Image
                      src={pawIcon}
                      alt="paw icon"
                      className={style["paw-icon"]}
                    />
                  </article>
                  <article className={style["about-sub"]}>
                    <h4 className={style["about-sub-title"]}>Care</h4>
                    <p className={style["about-sub-description"]}>
                      Without us, our volunteers the adoptees, these dogs
                      wouldn't be able to be here. So we ensure they have the
                      care they need and deserve.
                    </p>
                    <Image
                      src={pawIcon}
                      alt="paw icon"
                      className={style["paw-icon"]}
                    />
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default about;
