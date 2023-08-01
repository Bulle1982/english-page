document.addEventListener('DOMContentLoaded', function() {
    let contentHolder = document.getElementById('content-holder');
    let speeches = document.getElementsByClassName('eight-speeches');
    let speechQuizs = document.getElementsByClassName('eight-speeches-quiz');
    let quizContentHolder = document.getElementById('quiz-content-holder');
    for (let speech of speeches) {
        speech.addEventListener('click', function() {
            if (this.innerText == "Nouns") {
                contentHolder.innerHTML = `<div class="inner-div"><h2>Nouns</h2>
                <p>A noun is a name of anything. For example, Ali, Nairobi, tree, man , boy, girl etc.</p>
                <h3>Types of Nouns</h3>
                <p>In its simplest form, nouns are divided into 2 parts</p>
                <ol>
                <li>Proper Nouns and</li>
                <li>Common Nouns</li>
                <h3>Proper Nouns</h3>
                <p>Proper Nouns are names specific individuals, groups of people, place and a thing</p>
                <p>Examples of Proper Nouns are Muhammad, Kismayo, Amina, Azimio, ODM, SD etc</p>
                <p>Proper Nouns always start with capital letters regardless of where they occur in the sentence.</p>
                </ol>
                <h3>Common Nouns</h3>
                <p>Common Nouns are names that do not indicate specificity but rather indicate a common name shared by many people, place or things. Examples of common nouns are a girl, a man, a city, a country, a tree etc.</p>
                <p>You do not need to start the common noun with capital letters unless they occur in the beginning a sentence.</p>
                </div>`;

            } else if  (this.innerText == "Pronouns") {
                contentHolder.innerHTML = `<div class="inner-div"><h2>Pronouns</h2>
                <p>Pronouns are words used in place of nouns. Examples are he, she, it, they, we etc</p>
                <p>pronouns are instead of names that had been referred to recently.</p>
                <h3>Type of Prouns</h3>
                <p>At the basic level pronouns are divided into:
                  <ol>
                    <li>Personal Pronoun</li>
                    <li>Possessive Pronoun</li>
                  </ol>
                </p>
                
                <h3>Personal Pronouns</h3>
                <p>Personal pronouns are words that are used in place of names like Muhammad-He, Amina-She, Cat-it etc</p>
                <h3>Possessive Pronouns are words that show ownership of something. For example, your, his, hers, its.</h3></div>`;
            } else if (this.innerText == "Verbs") {
                contentHolder.innerHTML = `<div class="inner-div"><h2>Verbs</h2>
                <h3>What Are Verbs?</h3>
                <p>Verbs are words that express physical actions (e.g., to jump), mental actions (e.g., to guess), or states of being (e.g., to exist). Here are some more examples:</p>
                <ul>
                  <h3>Physical actions:</h3>
                  <li>to swim, to write, to climb</li>
                  <h3>Mental actions:</h3>
                  <li>to think, to ponder, to consider</li>
                  <h3>States of Being:</h3>
                  <li>to be, to exist, to seem</li>
                </ul>
                <p>Verbs are extremely important. Every sentence requires a verb. The verb in a sentence tells us what the subject is doing. You might find it useful to think of verbs as "doing" words.</p>
                <h3>Types of Verbs</h3>
                <p>As well as being categorized as a physical verb, a mental verb, or a state-of-being verb, a verb will often be further categorized as one of the following:
                  <ol>
                    <li>Action Verb</li>
                    <p>An action verb expresses an activity that a person or thing can do. For example:</p>
                    <ul>
                      <li>Lee eats cake.
                        <p>("Eating" is something Lee can do.)</p>
                      </li>
                      <li>The bear chased the salmon in the shallow rapids.
                        <p>("Chasing" is something the bear can do.)</p>
                      </li>
                      <li></li>
                      
                    </ul>
                    <li>Stative Verb</li>
                    <p>A stative verb expresses a state rather than an action. A stative verb relates to a state of being, a thought, or an emotion. For example:</p>
                    <li>Transitive Verb</li>
                    <li>Intransitive Verb</li>
                    <li>Auxiliary Verb</li>
                    <li>Modal Verb</li>
                    <li>Phrasal Verb</li>
                
                  </ol>
                </p>
                
                <h3>Personal Pronouns</h3>
                <p>Personal pronouns are words that are used in place of names like Muhammad-He, Amina-She, Cat-it etc</p>
                <h3>Possessive Pronouns are words that show ownership of something. For example, your, his, hers, its.</h3></div>`;
            } else if (this.innerText == "Prepositions") {
              contentHolder.innerHTML = `<div class="inner-div"><h2>Prepositions</h2>
              <h3>What Are Prepositions?</h3>
              <p>Prepositions are words that show relationships between other words in a sentence. Put another way, a preposition links two nearby words to indicate how they relate to each other. For example:</p>
              <ul>
                <li>The rat is in the corner.</li>
                <p>(The preposition "in" shows the relationship between "corner" and "rat.")</p>
                
                <li>Her party was on Saturday.</li>
                  <p>(The preposition "on" shows the relationship between "Saturday" and "party.")</p> 
                <li>to be, to exist, to seem</li>
              </ul>
              <h3>Examples of Prepositions</h3>
              <p>There are lots of prepositions. Here are some common ones:
                <ul>
                  <li>above, about, below, for, from, in, inside, into, of, to, until, with</li>
                  <p>Lots of prepositions precede words to tell us where or when things are.</p>
                  </ul>
                 <h2>Examples of prepositions that tell us where:</h2>
              <ul>
                <li>The cat on the table is called Toby.</li>
                <p>(The preposition "on" precedes "table" to tell us where the cat is.)</p>
                <li>Our lorry is stuck at the traffic lights.</li>
                <p>(The preposition "at" precedes "lights" to tells us where the lorry is.)</p>
              </ul>
              <h2>Examples of prepositions that tell us when:</h2>
              <ul>
                <li>The meeting on Saturday</li>
                <p>(This time, the preposition "on" precedes Saturday to tell us when the meeting is.)</p>
                <li>The bell will ring at 7 o'clock.</li>
                <p>(The preposition "at" precedes "7 o'clock" to tell us when the bell will ring.)</p>
              </ul</div>>
              `;
            } else if (this.innerText == "Adjectives") {
              contentHolder.innerHTML = `<div class="inner-div"><h2>Adjectives</h2>
              <h3>What Are Adjectives?</h3>
              <p>Adjectives are words that describe nouns. In other words, they describe people, places, or things. (In schools, adjectives are often introduced as "describing words.")</p>
              <h3>Examples of Adjectives</h3>
              <p>"Old," "green," and "cheerful" are examples of adjectives.</p>
              <ul>
                <li>old man</li>
                <li>green field</li>
                <li>cheerful parrot</li>
              </ul>
              
              <p>Here are some more adjectives in sentences:
                <ul>
                  <li>John is a tall boy.</li>
                  <li>New York is a busy city.</li>
                  <li>This is a tasty apple.</li>
                 </ul>
                <p>Notice how the adjectives (the shaded words) describe "boy," "city," and "apple." The words being described are nouns. So, adjectives describe nouns.</p>
              
              <h2>The Position of Adjectives</h2>
              <p>Here are some more examples of adjectives. (In each example, the adjective is highlighted.)</p>
              <h2>Adjective Before the Noun</h2>
              <p>An adjective usually comes directly before the noun it describes (or "modifies," as grammarians say).</p>
              <ul>
                <li>old man</li>
                <li>green field</li>
                <li>cheerful one
                  <p>("One" is a type of pronoun. Pronouns are words that replace nouns. So, adjectives can modify pronouns too.)</p>
                  <p>When adjectives are used like this, they're called attributive adjectives.</p>
                </li>
              </ul>
              
              <h2>Adjective After the Noun</h2>
              <p>An adjective can come after the noun.</p>
              <ul>
                <li>Jack was old.</li>
                <li>It looks green.</li>
                <li>He seems cheerful.</li>
              </ul>
              <p>In the three examples above, the adjectives follow linking verbs ("was," "looks," and "seems") to describe the noun or pronoun. (When adjectives are used like this, they're called predicate adjectives.)</p>
              <h2>Adjective Immediately After the Noun</h2>
              <p>Sometimes, an adjective comes immediately after a noun.</p>
              <ul>
                <li>the Princess Royal</li>
                <li>time immemorial</li>
                <li>body beautiful</li>
                <li>the best seats available</li>
                <li>the worst manners imaginable</li>
              </ul>
              <p>When adjectives are used like this, they're called postpositive adjectives. Postpositive adjectives are more common with pronouns.</p>
              <ul>
                <li>someone interesting</li>
                <li>those present</li>
                <li>something evil</li>
              </ul></div>
              `;

            } else if (this.innerText == "Adverbs") {
              contentHolder.innerHTML = `<div class="inner-div"><h2>Adverbs</h2>
              <h3>What Are Adverbs?</h3>
              <p>Adverbs are words that tell us how, when, where, how often, or how much. An adverb can modify a verb (e.g., runs quickly), an adjective (e.g., extremely small), or another adverb (e.g., very closely).</p>
              <h3>Examples of Adverbs</h3>
              <p>Here are some more easy examples of adverbs:</p>
              <ul>
                <li>She swims quickly.</li>
                <p>(Here, the adverb "quickly" modifies the verb "swims.")</p>
                <li>She is an extremely quick swimmer.</li>
                <p>(The adverb "extremely" modifies the adjective "quick.")</p>
                <li>She swims extremely quickly.</li>
                <p>(The adverb "extremely" modifies the adverb "quickly.")</p>
              </ul>
              
              <h2>Learning about Adverbs</h2>
              <p>When first learning about adverbs, we tend to focus on adverbs that modify verbs. In these two examples, the adverbs tell us how the verb is performed:</p>
              <ul>
                <li>He walked quickly.</li>
                <p>(In this example, "walked" is the verb, and the adverb "quickly" describes how the verb was done.)</p>
                <li>She talks loudly.</li>
                <p>(Here, "talks" is the verb, and the adverb "loudly" describes how the verb is done.)</p>
              </ul>
              <p>Did you notice that both adverbs ended "-ly"? Lots of adverbs that tell us how the verb is performed end with "-ly."</p></div>`

            } else if (this.innerText == "Conjunctions") {
              contentHolder.innerHTML = `<div class="inner-div"><h2>Conjunctions</h2>
              <h3>What Are Conjunctions?</h3>
              <p>Conjunctions are joiners. They are used to join words, phrases, or clauses. "And," "but," and "or" are three common conjunctions.</p>
              <h3>A conjunction joining words:</h3>
              
              <ul>
                <li>Jack and Jill went up the hill. </li>
                <p>(The conjunction "and" joins the words "Jack" and "Jill.")</p>
              </ul>
              <h2>A conjunction joining phrases:</h2>
              <ul>
                <li>
                  Toby is a highly intelligent but sometimes quiet boy.
                </li>
                <p>(The conjunction "but" joins the phrases "highly intelligent" and "sometimes quiet.")</p>
              </ul>
              <h2>A conjunction joining clauses:</h2>
              <ul>
                <li>You can prepare the salad, or you can clean the floor.</li>
                <p>(The conjunction "or" joins the clauses "You can prepare the salad" and "you can clean the floor.")</p>
              </ul>
              <p>When used correctly, conjunctions always join like with like (i.e., they join words of the same kind).</p>
              <h2>Types of Conjunction</h2>
              <p>"And," "but," and "or" are classified as coordinating conjunctions. There are three types of conjunction:</p>
              <ul>
                <li>Coordinating Conjunctions. Coordinating conjunctions join like with like. For example, they join a noun with another noun or an adjective with another adjective. The most common ones are "and," "but," and "or." There are seven in total: "for," "and," "nor," "but," "or," "yet," and "so." (You can remember them using the mnemonic F.A.N.B.O.Y.S.)</li>
                <li>Subordinating Conjunctions. Subordinating conjunctions join subordinate clauses to main clauses. Common examples are "although," "because," "if," "since," "unless," "until," and "while."</li>
                <li>Correlative Conjunctions. Correlative conjunctions are used in pairs to join alternatives or equal elements. The most common pairs are "either/or," "neither/nor," and "not only/but also."</li>
              </ul></div>`

            } else if (this.innerText == "Interjections") {
              contentHolder.innerHTML = `<div class="inner-div"><h2>Interjections</h2>
              <h3>What Are Interjections?</h3>
              <p>An interjection is a word used to express a strong feeling or sudden emotion. For example:</p>
              <ul>
                <li>Yes! I passed!</li>
                <p>("Yes" expresses joy.)</p>
                <li>Ouch! That is really sharp!</li>
                <p>("Ouch" expresses pain.)</p>
                <li>Ahem, you weren't meant to see that.</li>
                <p>("Ahem" expresses embarrassment.)</p>
              </ul>
              <p>Interjections are included in a sentence (usually at the start) to express a sentiment such as surprise, disgust, joy, excitement, or enthusiasm.</p>
              <p>An interjection is not grammatically related to any other parts of the sentence.</p>
              <h2>Examples of Interjections</h2>
              <p>In the following examples, the interjections are shaded.</p>
              <ul>
                <li>Hey! Get off that floor!</li>
                <li>Oh, that is a surprise.</li>
                <li>Good! Now we can move on.</li>
                <li>Jeepers, that was close.</li>
              </ul></div>`
            } else {
                alert('Hey! I have no idea which study item you clicked!');
            }
        });
    }

    for (let speechQuiz of speechQuizs) {
        speechQuiz.addEventListener('click', function() {
            if (this.innerText == "Nouns") {
              quizContentHolder.innerHTML = `<div div class="inner-div">
 
              <h2>1. What is a noun?</h2>
              <p class="paragraphs">A word that expresses actions.</p>
              <br>
              <p class="paragraphs">A word that shows ownership.</p>
              <br>
              <p class="paragraphs" id="correct-one">A name of anything.</p>
              <br>
              <h2>2. Name the types of nouns.</h2>
              <p class="paragraphs">Long noun and short noun.</p>
              <br>
              <p class="paragraphs" id="correct-two">Proper noun and Common noun.</p>
              <br>
              <p class="paragraphs">Clear nouns and hard nouns.</p>
              
              
            
            </div>`
            } else {
                alert('Hey! I have no idea which quiz item you clicked!');
            }
        })
    }
});