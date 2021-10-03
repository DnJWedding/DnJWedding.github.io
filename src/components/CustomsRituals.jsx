import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";

function CustomsRituals() {
  const toggleTrueFalse = (variable, setFunction) => variable ? setFunction(false) : setFunction(true)

  const [showResults, setShowResults] = React.useState(true)
  const onClick = () => toggleTrueFalse(showResults, setShowResults)

  const [showVarPakshSwagat, setShowVarPakshSwagat] = React.useState(true)
  const onClickVarPakshSwagat = () => toggleTrueFalse(showVarPakshSwagat, setShowVarPakshSwagat)
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Wedding Customs and Rituals</h1>
            <p>
              According to Hinduism there are sixteen religious rites to be preformed by every
              Hindu. These are called <i>sanskaras</i>. <i>Vivah</i> (marriage) is one of these <i>sanskaras</i> according
              to <i>Lord Manu</i>. <i>Vivah</i> is a union with consent between a man and a woman for life and is
              religiously solemnized. It is the ceremony prior to the entry into the householder&apos;s 
              life, the second of the fours stafes in the life of a Hindu.
            </p>
          </div>
          <div className="col-lg-12">
            <h2 className="font-weight-light">The Institution</h2>
            <p>
              <i>Vivah</i> is a union which binds not only two hearts together, but two families as well.
              In Hinduism this union is especially sacred. For the strength to love, to obey, to
              discriminate, and to understand, humble supplications are made by the <i>dulhan</i> (bride)
              and the <i>dulha</i> (groom) at the time of the <i>Vivah</i>. A married couple living according to
              the dictates of <i>Dharma</i>, pooling their mental and physical resources together for the
              success of the marriage union, can achieve nothing but complete martial bliss.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light" type="submit" onClick={onClickVarPakshSwagat}><i>Var Paksh Swagat Mitnee</i></h3>
            { showVarPakshSwagat ? <p className="font-weight-light">(Welcoming the Wedding Party)</p> : null }
            { showVarPakshSwagat ? 
              <p>
              On the wedding day at an auspicious hour, the <i>dulha</i>, bedecked in resplandent ornamental
              costumes, with a crown on the head and yellow or pink gown, arrive with his family and 
              and friends at the <i>dulhan&apos;s</i> residence where the ceremony takes place. This is his <i>Baraat</i>.
            </p> : null }
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light" type="submit" onClick={onClick}><i>Dvar Puja</i></h3>
            { showResults ? <p>
              At the entrance to the <i>dulhan&apos;s</i> residence, the fathers of both <i>dulhan</i> and <i>dulha</i> embrace each
              other. The <i>dulha</i> is garlanded. Vedic hymms are chanted by the priest in attendance. A short <i>puja</i>
              or prayer service takes place. The <i>dulha</i> accepts a gift from the <i>dulhan&apos;s</i> father.
            </p> : null }
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light"><i>Parchan</i></h3>
            <p>
              The <i>dulha</i> enters the premises where the mother of the <i>dulhan</i> and her female friends welcome him.
              They honer him with <i>aarti</i>, give him gifts and extol his virtues in their songd. Some of them may
              be seeing him for the first time and for this reason <i>Parchan</i>, which means examination, is done.
              They see his face and his physical features.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light"><i>Janwaas</i></h3>
            <p>
              After the <i>Parchan</i> ceremony is over, the <i>dulha</i> and his baraat retire to a place of rest provided by
              <i>dulhan&apos;s</i> father. <i>Jan</i> means peaople and <i>Waas</i> means to rest. They tarry for a while and obtain some
              rest piror to the elaborate ceremony to follow. The <i>dulhan</i> will soon leave her childhood companions
              and the comfort of her parent&apos;s home to seek a new life and new friends. The sadness of parting is
              noticealbe and is also a reminder to the <i>dulhan</i>&apos;s mother to be prepared to endure her daughter&apos;s
              parting with fortitute.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Bride Enters <i>Mandap</i></h3>
            <h3 className="font-weight-light"><i>Puja</i> to<i>Lord Ganesh</i> is preformed, followed by <i>Raksha Sutra</i></h3>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light"><i>Raksha Sutra</i></h3>
            <p>
              <i>Raksha Sutra</i> is a cord of protection. In this part of the ceremony the <i>barka</i> (<i>dulha&apos;s</i> elder brother)
              enters the <i>Mandap</i> and after a short ritual he places a cord of protection around the neck of the
              <i>dulhan</i>. In placing the is cord on the <i>dulhan</i>&apos;s neck, the <i>dulha</i>&apos;s brother takes a vow to protect the
              <i>dulhan</i> in all distress and adversities which may befall her.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Bridegroom Enters <i>Mandap</i></h3>
            <h3 className="font-weight-light">He is welcomed by Bride&apos;s Father</h3>
            <p>
              The <i>Vivah</i> preparation now begins and proceeds in the following stages. The dulha enters the <i>Mandap</i> for the
              first time. Madhuparka is a sweet liquid combination of ghee, dhai and honey. Under the bedecked atmosphere, the dulha&apos;s
              hand is held by the dulhan&apos;s fther and his request is that the relationship between the two parties remain as "sweet" as 
              the liquid combination ghee, dhai, and honey, which are the ingredients of Hindu hositality. At the same time a loin cloth
              is presnted to the dulhan on which he sits.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Kanyadaan</h3>
            <p>
              Kanya means a maiden dulhan and Daan meand to give. The sacrifical fire is kinded by the dulhan&apos;s priest and then
              the rest of the ceremony takes place. The dulhan, now adorned in a richly colored sori, enters the Mandap. In a touching
              ceremony, the dulhan&apos;s hands are placed in the dulha&apos;s while water is being poured in a continous flow by the dulhan&apos;s brother.
              The priedt reads the sacred vow which the dulhan&apos;s father takes in giving his daughter away. Now, in all solemnity, she is handed
              to the man whom she loves and will obey henceforth. The dulhan&apos;s father now vows by the sun, starts, the deities, and by the man
              to give his daughter away to the dulha.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Panigrahan</h3>
            <p>
              Pani means the hand. Granhan means to grasp. The dulha now formally grasps the hand of the dulhan and leads her gently to his side,
              where she sits beside him on his right.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Bhawar</h3>
            <p>
              Bhawar means circle. After the dulhan seats herself on his right, the fire ritual commences. The priest chants vedic hymms. Offerings are 
              made to the fire. The dulhan leads first with the dulha behind her. Thereafter the dulha leads with the dulhan following. Together they go
              around the sacred fire seven times, four by the dulhand and three by the dulha, throwing grains each time into the fire known as lawa. 
              Their garments are knotted together as they go around the fire. The significance of throwing grains is that they both will join together in
              preforming the Yajnas, sacrifices and religious rites which a Hindu household is required to preform throughout their married life. Moreover
              the dulhan, by leading first, is demonstrating her determination to stand first beside her husband in all their happiness and sorrows during
              their married life.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Sapta Padi</h3>
            <p>
              The couple then walks seven steps together recuting mantras which express their principal duties as housholders:
            </p>
            <ol>
              <li >Let us take the first step to provide our household with a nourishing diet.</li>
              <li >Let us take the second step to develop physical, mental, and spiritual powers.</li>
              <li >Let us take the thrid step to acquire and increase our wealth by righteous means and proper use.</li>
              <li >Let us take the fourth step to acquire knowledge, happiness, and harmony by mutual love and trust</li>
              <li >Let us take the fifth step so that we are blessed with strong, virtuous and heroic children.</li>
              <li >Let us take the sixth step for self restaint and longevity.</li>
              <li >Let us take the seventh step to be true and faithful companions and remain lifelong partners by this wedlock.</li>
            </ol>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Shila Rohan</h3>
            <p>
              Shila means a rick and Rohan meand to thread on. After throwing the lawa, the dulhan now places the toe of her right foot on aa small piece of 
              solid rock. She thus shows that her devotion towards the dulha will not be hollow, but solid as the piece of rock on which she places her toe.
              The dulha accepts her promise and removes the rock with his right hand.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Saat Vachan</h3>
            <p>
              The dulhan, still seated on the right of the dulha, now makes seven requests which he is required to give concent to. She then goes over to 
              his left where she seats herself and thus becomes his wife. From request number one through six, the dulhan seeks to be consulted on all 
              important issues relating to their successful matrimonial life. The final request is that they should be devoted to each other and nothing 
              should come between them. The dulha answers in the affirmative, and he himself makes one request of the dulhan, that in accordance with Dharma,
              she shall devoted to him mind nd body. She answers in the affirmative.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Touching of the Heart</h3>
            <p>
              The groom then comes over the bride;s right shoulder touches her heart saying: "I hold your heart in serving fellowship, your mind follows my 
              mind. In my word you rejoice with all your heart. You are joined to me by the Lord of all creatures."
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Sindoor</h3>
            <p>
              Sindoor is vermilion powder. The above pledges have been made, the bulha now applies sindoor on the forehead of his dulhan. He puts a red dot 
              on her forehead and places the powder in the parting of her hair. This is the traditional mark of the Hindu married woman whose husband is alive.
              The dulha requests that she keeps this mark on her head signifying her marriage to him. The dulha says "I bedecked thee Oh bride with this mark 
              of mine. Keep it as long as I live. May you always be happy and have a long life."
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Aashirbaad</h3>
            <p>
              Aashirbaad means blassings. Once the wedding rituals have been completed, the couple touches the feet of their parents and the priest, asking for
              their assirbaad. All those assembled shower flowers on the couple and bless them on their marriage. The dulha and his baraat now proceed to have 
              Kitchari together in the Mandap.
            </p>
          </div>
          <div className="col-lg-12">
            <h3 className="font-weight-light">Vidai</h3>
            <p>
              The ceremony completed with the departure of the dulha and dulhan, whihch is known as vidai. Farewell to the dulhan by her parents, siblings, relatives,
              and friends is indeed a very emotional part of the whole event. The dulhan leaving her parental home to build an entirely new life with her husband and
              members of his immediate familty in a different environment all together. She leaves with tears of joy and sorrow, but carries the very best wishes of 
              all who witnessed her Vivah Sansakar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomsRituals;
