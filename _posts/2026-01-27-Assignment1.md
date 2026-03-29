---
title: "Assignment 1: Working with a Corpus"
excerpt_separator: "<!--more-->"
tags:
  - assignment
  - text
---

# Introduction

  
In creating this corpus, I have decided to do a distant reading on vampire-themed texts from Project Gutenberg because I was interested in how authors from different time periods (from 1819 to 1914) portrayed vampires. Unlike mythological creatures like Frankenstein, werewolves, and zombies, vampires are always being redefined in different forms of media and literary works. They can be frightening and decaying, beautiful and seductive, or even not be creatures at all, but metaphors for something else. This made me curious on whether authors from the 1800s even use the word 'vampire' to describe their creatures, or do they build them through atmosphere and implication instead.

The texts I’ve chosen are:
-  *Carmilla* by Joseph Sheridan Le Fanu (pg10007)

-  *House of the Vampire* by George Sylvester Viereck (pg17144)

-  *The Vampyre* was written by John Polidori (pg6087)

-  *Vampires and Vampirism* by Dudley Wright (pg62873)

-  *Dracula's Guest* by Bram Stoker (pg10150)

  

# **Rationale**

Prior to my analysis, I hypothesized that words like “blood” and “night” would be common in all texts, as vampire fiction often employs dark and Gothic themes. I also hypothesized that the usage of words like “blood” and “night” might vary depending on the fiction’s emphasis on action or mood. One thing I was unsure of, however, is whether the word “vampire” would frequently appear in fiction, or if older fiction would instead focus on mood, implication, and description to indicate the vampire’s presence. I think what makes my corpus interesting is the variety of approaches to vampirism, ranging from early Gothic fiction to interpretations of what constitutes a "vampire." 

In choosing these particular five works, I also considered the word count of each. Project Gutenberg shows massive works like *Varney the Vampire* and *Dracula* itself, which have a word count ranging from hundreds of thousands of words down to less than 7,000. I checking the word count of each work through Voyant Tools' summary panel and found that having works with extreme differences in word count, like *Dracula* which has a word count of over 165,000, would have greatly affected the results when the relative frequency is considered. Therefore, the five works for this corpus have a word count ranging from 15,000 to 60,000. 

![Voy Summary](/assets/images/voysummary.png)
*Figure 1: Summary statistics from Voyant Tools showing word counts across all possible texts.*

After conducting some research on vampire fiction, I hypothesized that these texts would instead focus on implication rather than direct mention. I was also interested to see how my analysis would support or contradict my hypothesis. For example, knowing that *pg10007* is a work of fiction that focuses on implication rather than direct mention, I was interested to see how the text's overall tone would show in terms of word frequencies.

# **Voyant Tools**

The first thing that leapt out at me as I loaded my corpus into Voyant Tools was the rarity of the word "vampire" in the fiction texts as a whole. It makes sense, of course, that *pg62873*, being a non-fiction scholarly study, would use the word most commonly, as it is necessary in scholarly works to refer to one's subject matter repeatedly.

What was more surprising was just how dominant "vampire*" was in its sole appearance in pg62873, compared to the  four fiction texts at nearly zero:

![Voy Trends](/assets/images/voytrends.webp)
*Figure 1: Relative frequency trends for blood*, night*, vampire*, and death* across the five texts.*

Looking at the data, "night*" is clearly the most consistently present term throughout all the fiction texts, implying that nocturnal imagery is used to signal the vampire's presence rather than being naming it directly. 
"blood*" and "death*" follow a similar pattern to "vampire*" in that they remain low throughout the fiction texts before spiking sharply in *pg62873*. This further supports the distinction between the way that both fiction and non-fiction treat the same subject material. In addition, this also supports my idea of how these types of works would utilize indirect language. It may not be immediately clear if one reads each of these works linearly. This is because if one reads these works linearly, they would be so engaged with the work to think about how they would see word patterns across five works at once. Adwetewa-Badu touches on this idea on the **High Theory Podcast** on the value of distant reading for finding patterns across works, especially how these works can "give us really wonderful insights into how people thought about language, how people thought about the world around them in particular time periods, and then how that changed over time as well." (12:03). This is evident since it also shows how their usage changes throughout nearly a century of vampire literature. 

<iframe style='width: 100%; height: 400px;' src='https://voyant-tools.org/tool/Loom/?view=Loom&corpus=6ca327906f220f3326c93e8eff733fd9'></iframe>

*Figure 2: Interactive Bubblelines visualization showing the distribution of death\*, blood\*, vampire\*, and night\* across all five texts.*

This can be seen in the results that I have found so far. From the Trends graph, we can see how the use of words develops over time, covering almost a hundred years of vampire literature. In *pg6087*, it should be noted that, since it was written in 1819, during the Romantic period, when horror was based more on atmosphere, mystery, and psychological terror rather than outright declaration, the word "vampire" is never even mentioned in the text, as the vampire uses his aristocracy and intimidation, not vampirism, to get what he wants (Süner 187). In 1914, however, it is clear from *pg62873* that the cultural and academic interest in documenting and classifying vampire mythology had grown considerably since the genre had been firmly established through nearly a century of Gothic fiction from Polidori to Stoker. This is evident in *pg62873*, as the word "vampire" is used constantly, but this is because it is a non-fiction text and the author is writing academically, so he must define and explain his subject matter outright. In the fiction texts in between, however, the use of the word "vampire" is again as in *pg6087*, i.e., "night*," "blood*," and "eyes*" without ever using the word "vampire" itself.

What is interesting, however, is that even though these works are as different as can be, they use the same words to describe the vampire, whether male or female, aristocratic or not, in a metaphorical or in a real way. This can be seen in the Trends graph (Refer to Figure 1), where we can see all five works at once, something that would be difficult to see without doing so.

# **R Markdown**

From the RMarkdown notebook in posit.cloud, I created two more visualizations using the Project Gutenberg Explorer. 

![R Wordcloud](/assets/images/wordcloud.webp)
*Figure 3: Color-coded wordcloud showing the most frequent words across the corpus, colored by book origin.*

The wordcloud at once reveals the prominent words "time," "night," "blood," "eyes," "hand," and "found" that appear in the corpus overall. What leaps out, however, is the physicality of the words that appear most frequently in the corpus. These words are not about action or the plot of the novels but about the body, night, and blood. *pg10007* (dark red) makes up most of the words that appear in the largest size, which was a little surprising to me at first. However, since the work *pg10150* is twice as long as *pg10007*, I assumed that the size differential was the reason for the disparity in the wordcloud. But since the wordcloud uses relative frequency, the length of the two books cannot be the reason for the disparity in the wordcloud. *pg10007* simply is that dense with atmospheric language, no matter what the actual length of the two books may be. As a matter of fact, the wordcloud illustrates the point that Posner makes in **"Humanities Data: A Necessary Contradiction"**: "Data reveals some aspects of a text, but there is always a necessary contradiction between the richness of the work and the poverty of the numbers."

![R Heatmap](/assets/images/heatmap.webp)
*Figure 4: Scaled Word Frequency Heatmap showing the amount of key gothic terms in all five texts.*

Within this heatmap, what stood out is how *pg10007* dominates in nearly every term associated with dark/gothic fiction: blood (113), eyes (166), night (310), soul (64), and so on, reinforcing the common assessment of the most atmospherically rich of the five works. This demonstrates the extent to which Le Fanu uses sensory and atmospheric vocabulary in comparison to the other texts. 

I also noticed the absence of any gothic terms in *pg10150*: shadow (0), dark (1), dead (1). Since Stoker is the author of Dracula, which is one of the novels that is recognized for its use of descriptive terms for darkness, death, and supernatural fright, and since *pg10150* was written after Dracula, I would have thought that some of these terms would have spilled over into the short stories. According to Mark Nixon in his work **"Bram Stoker and Another Dracula"** from **The Green Book**, Florence Stoker herself described *pg10150* as  "an hitherto unpublished episode from Dracula" and mentions that "like some sequels, 'Dracula's Guest' is but a pale shadow of what had come before" (92). This explains how the terms that Dracula is known for are nearly absent from the short story collection, which was perhaps not intended to be a work of gothic fiction in the first place.

# Reflection

Looking back at this analysis, there are a few things worth addressing about the process itself, the tools, and what I would do differently.

In terms of consistency, both tools were fairly similar when it came to the overall dominant words across the corpus, as "night," "blood," and "eyes" were prominent in both the Voyant Trends graph and the R wordcloud. However, it is worth noting that the wordcloud itself did not remain consistent from run to run.This is particularly relevant to what Ted Underwood writes about in **"The Risks of Distant Reading"** where it is stated that "scholars cannot adopt a new mode of interpretation without fully understanding the reasoning it implies" (p. 145). This indicates that the stopwords, the frequency, and the parameters, all of which are adjusted using RMarkdown, directly affect the words that are shown, their prominence, and can change the meaning behind the same corpus.

In terms of its scope, it was somewhat limiting at times to have only five texts to analyze. While it provides a good overview of many different approaches to vampirism in literature, it also misses out on many major works that could have provided more information on how this genre developed over time in 19th-century literature. However, it was also somewhat easier to work with five texts in this project because it was a new approach to using distant reading techniques and working with R would have become much more complicated with more texts.

For research papers on many different types of themes found in multiple texts, such as dark themes in literature, political terms found in historical documents, or even using it to analyze readings throughout a semester in a course, using distant reading tools such as Voyant and R could be a good starting point to look for patterns before delving into close reading techniques. It would be a good starting point for any project where there is more material than one person could hope to read in a short time frame.

# Works Cited

Adams, Kim, and Saronik Bosu. "Distant Reading: A Conversation with Ama Bemma Adwetewa-Badu." High Theory, New Books Network, 2022.

Nixon, Mark. "Bram Stoker and Another Dracula." The Green Book, 2013.

Posner, Miriam. "Humanities Data: A Necessary Contradiction." Harvard Purdue Data Management Symposium, 2015. https://miriamposner.com/blog/humanities-data-a-necessary-contradiction/

Underwood, Ted. "The Risks of Distant Reading." Distant Horizons: Digital Evidence and Literary Change, pp. 143-169. University of Chicago Press, 2019.

Signorotti, Elizabeth. "Repossessing the Body: Transgressive Desire in Carmilla and Dracula." JSTOR, www.jstor.org/stable/23118160.

Süner, Ahmet. “Gothic Horrors of the Private Realm and the Return to the Public in John Polidori’s The Vampyre.” Moderna Språk, vol. 112, 29 June 2018, pp. 187–200. https://doi.org/10.58221/mosp.v112i1.7717


READY FOR GRADING