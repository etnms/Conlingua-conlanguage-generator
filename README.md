# Conlingua - Constructed language generator

## Sections
- [Description and use](#description-and-use)
- [Features](#features)
- [About](#about)
- [Limits and future updates](#limits-and-future-updates)
- [Linguistic details](#linguistic-details)

### Live demo :point_right: https://etnms.github.io/Conlingua-conlanguage-generator/

## Description and use
Conlingua is a web app that allows you to create your own constructed (con) languages. The app provides you with a set of different features that you can fiddle with to create your languages. You can generate as many languages as you wish!<br/>
First, choose your parameters and then generate your language. Once you generated a language you can then view its details in the different tabs of the app (Grammar, Sounds, Lexicon). Each language is randomly generated based on the parameters you chose.<br/>
:gem: Conlingua is not limited to simply creating random words but will also provided you with more details such as basic morphology, more in deptch morphology such as alignment,conjugations, IPA charts, lexicon lists and search options :mag:.<br/>
:raised_hand_with_fingers_splayed: You can use this app for any reason you want: fantasy languages for games, personal interest for con languages, interest in linguistics etc.


## Features 
### Parameters
:pencil2: Conlingua provides you with different parameters, but you don't have to use all of them! Each parameter has a default value so you can skip whichever you want.
#### Inputs and IPA
:pencil2: The most basic parameter of the app is the sounds of your language. You can choose consonants and vowels that will serve as the basis of your language.
You can access IPA characters for each input (vowels or consonants) but if you want to stick to English characters you can do that as well. :exclamation: Vowels and consonants are necessary before creating a language.
#### Syllables, clusters, and stress
:pencil2: Conlingua allows you to have control over the minimum and maximum number of syllables you want in a word. Words are randomly generated and will fit the description. <br/>
You can also choose the number of consonants that will appear in a consonant cluster. [Consonant cluster](#consonant-cluster)<br>
You can choose the stress of your language: the 4 options are 1) stress on the first syllable, 2) stress on the second, 3) stress on the syllable before the last, 4) stress on the last. :exclamation: Note: by default, every word will be stressed the same way, which may not reflect how some natural language behave. Keep that in mind as you might want to adjust this on your own.
#### Gemination and consonant only words
:pencil2: Further options allow you to choose if your language has words with [gemination](#gemination) or [consonant only words](#consonant-only)<br>
#### Morphology
:pencil2: Besides providing you with phonological parameters, Conlingua will also give you access to some morphological features of your language. You can choose the type of [morphology](#morphology) of your language (fusional, agglutinative or isolating).</br>
Besides, you can choose the [word order](#word-order) of your language.</br>
Finally, you can also choose the [morphosyntactic alignment](#morphosyntactic-alignment) of your language. Each generated language will provide you a basic breakdown of the alignment of your language with a legend and details.

## About 
The following were used in the making of the app:
- React
- Sass
- MUI (icons)

## Limits and future updates
- <span style="color:red">:x: At the moment you won't be able to save your data. This feature will come in a future update.<span>

## Linguistic details
The following list provides basic details and explanations of some of the features. 
#### Consonant cluster
A consonant cluster is a group of consonants together than are not separated by a vowel. For example "gl" in "global".
#### Gemination
Gemination refers to the length of two identical consonants next to each other. For example "mm" will be longer than just "m". This can be a distinctive feature in some languages such as Arabic.
#### Consonant only
As the name indicated consonant only words do not have vowels. Such words are quite rare in natural languages.
#### Morphology
The morphological type will how your language deals with tenses (marked as an inflection like in English or French) or separately. Isolating languages are likely to have affixes, while inflectional languages are more likely to have some. Agglutinative languages will have lot of affixes.
#### Word order
Word order decides where the subjet, verb, and object of a sentence, will be positoned. English is a SVO (Subject Verb Object) language.
#### Morphosyntactic alignment
Morphosyntactic alignment determines the relation between arguments of transitive verbs (example: "I eat something") or intransitive verbs (example: "I run") and how they are marked and distinguish in a language.