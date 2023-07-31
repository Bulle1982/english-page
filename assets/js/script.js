document.addEventListener('DOMContentLoaded', function() {
    let contentHolder = document.getElementById('content-holder');
    let speeches = document.getElementsByClassName('eight-speeches');
    let speechQuizs = document.getElementsByClassName('eight-speeches-quiz');
    for (let speech of speeches) {
        speech.addEventListener('click', function() {
            if (this.innerText == "Nouns") {
                contentHolder.innerHTML = `<h2>Nouns</h2>
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
                `;

            } else if  (this.innerText == "Pronouns") {
                contentHolder.innerHTML = `<h2>Pronouns</h2>
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
                <h3>Possessive Pronouns are words that show ownership of something. For example, your, his, hers, its.</h3>`;
            } else if (this.innerText == "Verbs") {
                contentHolder.innerHTML = `<h2>Verbs</h2>
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
                <h3>Possessive Pronouns are words that show ownership of something. For example, your, his, hers, its.</h3>`;
            } else {
                alert('Hey! I have no idea which study item you clicked!');
            }
        });
    }

    for (let speechQuiz of speechQuizs) {
        speechQuiz.addEventListener('click', function() {
            if (this.innerText == "Nouns") {
                alert('Hey! You clicked quiz noun!');
            } else {
                alert('Hey! I have no idea which quiz item you clicked!');
            }
        })
    }
});