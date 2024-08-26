import React, { useState, useContext } from 'react';
import AxiosContext from '../services/AxiosProvider'; // Adjust the path as needed
import {
  Container,
  Box,
  Paper,
  Button,
  Typography,
  TextField,
  Slider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Collapse
} from '@mui/material';

const defaultValues = {
  title: 'Mozambique',
  format: 'Feature Film',
  genre: 'Action, Crime, Drama',
  logline: 'Kari Vardhan - a Dreamer and middle class Father of two children...',
  target: 'Soozhal Cineemas',
  author: 'Mejel',
  slides: 7,
  synopsis: `Naalu perukku nalladhuna edhuvumey thappu illa. -Rajan - Father

Enaku nalladhuna edhuvumey thappu illa. - Kari - Son

Past: 2005

Rajan, in his late 30s, is drunkenly lamenting in his dilapidated small house while his teenage son, Kari, lies beside him. Rajan reveals that when his wife asked him to abandon violence after Kari's birth, he complied. However, she also implored him to renounce the ideology he held dear when Kari's mother was expecting a child, and he vehemently resisted.

Rajan continues to reiterate that his wife left him because he firmly believed in the notion of "Naalu perukku nalladhuna edhuvumey thappu illa" (a famous movie dialogue from Nayagan, meaning "If something is good for even four people, then it's not wrong to do it"). He insists that the blame lies with his wife, even for his descent into alcoholism. His 15-year-old son, Kari, lying beside him, already irritated by Rajan's loud drunken voice, becomes even more agitated upon hearing his father blame his mother and pleads with his dad to keep quiet.

As Rajan doesn’t keep quiet, at one point Kari loses it and shouts at Rajan that he is the reason for his mother to leave and it is not her fault. This triggers Rajan utmost. Rajan gets up to throw Kari out of the house and that’s the last day they both ever had a face-to-face conversation in life. When Rajan wakes up the next morning, Kari is missing and Rajan goes on to find him at his Uncle Kumar’s place and Kari refuses to even take a look at Rajan. A turbulent relationship goes on to follow until Kari finishes his 12th grade to leave his village and move to city with his mother. 

Present: 2023

After almost 20 years, even for his wedding, Kari is stubborn not to invite his Father, Rajan. Though his uncle and his father’s cousin Kumar pressured Kari to invite Rajan, in vain Kari did not.

Kari is in his mid 30s, currently working in an MNC and living with his wife, two kids, and mother. Rajan is living in the same village in Guntur where he has now retired after 35 years of service in South Indian railways.

Frustrated Kari has a dream that disturbs him to being an entrepreneur and leaves his job. When his wife orders an expensive moringa product online, he is amazed at the potential moringa market has around the globe since growing up he has seen moringa trees almost anywhere and everywhere in his village.

Kari made the decision to export moringa from India to Mozambique, using the Tuticorin port for transportation by ship. To realize this plan, he returned to his village after an absence of nearly two decades, where he reconnected with Kumar. Much to his surprise, he discovered a vast grove of mature moringa trees that has been thriving for years. This abundance, along with the excellent potential for further cultivation, would prove adequate to meet the demand for large-scale exports to Mozambique and other nations.

Rajan in his early 60s now, however, remains adamant, countering Kari's decision. He argues, "You still can't see beyond yourself, Kari. If, by any chance, the promised export quantity and rate fail to materialize, and the villagers invest their borrowed money to cultivate moringa across their lands, it won't just be you who's at risk; the entire village will be in jeopardy."

Kari responds to Rajan, feeling angry about his resistance to change and a new approach. In his frustration, Kari departs from the village. Kumar, however, pledges to persuade some villagers to start harvesting moringa. If Kari can demonstrate real profits, he'll encourage the entire village to follow suit.

As promised, Kari begins exporting moringa from Guntur to Mozambique, delivering substantial returns to the villagers who invest in moringa farming and harvesting. This success sparks hope among more villagers, encouraging them to invest in moringa cultivation.

A year later, Kari returns to the village, and his arrival is met with widespread joy and happiness from almost every member of the village. Rajan, too, beams with pride and watches him from a distance, feeling genuinely happy for Kari. Kumar takes on the role of updating Rajan about Kari's life on an almost daily basis.

Suddenly, one morning, Kumar rushes to Rajan's house with an audio message he received from Kari. Rajan appears visibly upset and concerned. Anxious, Kumar asks if they shouldn't consider going to the police, as Kari suggests in the audio message. Rajan agrees, urging Kumar to keep the content of the audio note a secret but to inform the police that they have lost contact with Kari.

Kumar reveals that they urgently need to reach Kari because, in the past week, they had supplied five times more credit than usual, as per Kari's request, due to a sudden bulk order. If this extended credit is not repaid on time, the villagers will face hefty interest charges, potentially spiraling into a significant problem for those who invested in moringa cultivation. As mentioned in the audio note, if they fail to export the cultivated moringa now, it will be another six months before the yield, and the villagers might find themselves at an increased risk of resorting to suicides at an alarming rate.

Rajan reassures Kumar not to worry. He admits that he hasn't done much for his own son and isn't even sure if his son is alive. But he feels a responsibility to maintain the positive impact he's made in the village, bringing laughter and love after a long time. Regardless of the circumstances, Rajan is determined to ensure that this transformation continues, no matter what happens.

Kumar advises Rajan to remember that he's not the same person he was 25 years ago, and taking daring actions shouldn't be an option at their age. In response, Rajan subtly expresses that daring at this age makes even more sense.

Before departing, Rajan meets Kari's wife and his own wife in Hyderabad. He reassures them that Kari will be alright and promises to bring him back home. Rajan's wife, deeply upset, doesn't even make eye contact with him and continues to weep softly, repeating, "Kari should be safe."

As Rajan arrives in Mozambique, Bavuma, a friend and employee of Kari, picks him up. During the drive to the Moringa by-products factory, Rajan introduces himself as a representative sent by Kari's family to oversee operations until Kari reappears. He deliberately conceals the fact that Kari is his own son.

Their car is halted by a convoy of limousines, and Rajan inquires if it's the Mozambican Prime Minister's convoy. Bavuma chuckles and explains that it's not the PM but another influential figure in Mozambique – Chacko. Chacko is a man of Indian origin who has been settled in Africa for the past two to three centuries. He's regarded as the go-to person for any Asian living in Mozambique when they encounter problems, much like a Godfather figure.

In a short span of time, Rajan efficiently organizes the business and resumes moringa exports from his village. He settles in Mozambique and diligently seeks any available information about his son's fate, although his efforts prove futile.

As time passes, Rajan forges a strong and close relationship with Chacko, given their similar ages. Chacko often expresses that his primary motivation in life is his only son, who resides in London.

One day, after a night of heavy drinking with Chacko, Rajan decides to reveal the true reason behind his presence in Mozambique. However, just as he's about to disclose this secret, he receives a call from Kumar. Kumar informs him that their recent export shipment has been detained at Tuticorin port due to some GST-related clarifications. Kari is urgently required to resolve the matter since he is the primary business owner and managing partner. Kari's wife, who is only a partner in the export company, which is named after their daughter, "Mithila Exports," can't handle this situation alone.

In a rush, Rajan heads back to India, leaving Mozambique. His sudden departure leaves Chacko with some unanswered questions.

Upon landing at Bombay airport, Rajan is abruptly apprehended by NCB officials for interrogation. He is utterly shocked by the turn of events. Officer Arora accuses Rajan of smuggling marijuana from India to Mozambique, which Rajan vehemently denies, insisting that they export moringa, not marijuana.

Arora proceeds to open a box from their export, revealing fresh marijuana buds concealed within the center of tightly packed moringa leaves. Rajan is in disbelief, and Arora accuses Kari of having been involved in marijuana smuggling, having gone underground at some point, and alleges that Rajan has taken over his illicit operations. Rajan continues to deny the accusations, but Arora threatens to arrest his daughter-in-law, who is the other partner of Kari's export business, if he doesn't cooperate and reveal the truth.

Rajan asserts that he is willing to do whatever it takes to help uncover the truth and prove their innocence. At this point, Arora leans forward, showing Rajan a black-and-white picture and asking if he recognizes the person in it. Rajan, however, doesn't recognize the 30-year-old man in the picture and shakes his head.

Arora then identifies the individual as Ravi, a notorious gangster who has been evading the Indian NCB for two decades. He proceeds to show another picture, this time of Chacko, their business associate and friend in Mozambique. Rajan immediately confirms that the person in the picture is Chacko.

Arora moves in closer to Rajan and informs him that Ravi is also in the second picture. Rajan initially denies it, but after a brief pause and a closer look at both the old and new pictures, he suddenly shouts a swear word at the top of his voice, clearly distressed and shocked by the revelation.

MID-BLOCK

Rajan returns to Hyderabad and finds his wife bedridden, consumed with worry about Kari's well-being and whereabouts. Kumar updates him on the villagers' anxiety due to the shipment being held at the port. In response, Rajan provides assurance that everything will be resolved. He assures them that the shipment will be cleared the following day, as he has made all the necessary arrangements for its release.

Rajan sits beside his bedridden wife and expresses remorse for his life choices, acknowledging that he's been too focused on his ideologies and failed to prioritize his family. He recounts how he abandoned violence entirely 20 years ago when they lost their second child, but now, he feels compelled to return to it in order to protect their firstborn. His wife, lacking the energy to respond, simply nods with tears streaming down her face.

Rajan steps out of the room, and there stands Kumar, gazing at Rajan in surprise, a mixture of happiness and excitement lighting up his face. Rajan looks markedly different from the beginning of the film, with sharp, intense eyes and his hair pushed back, a departure from his usual side-parted look. Kumar, with nothing more than the intensity in his eyes, asks if things are as they seem. In response, Rajan simply nods his head, confirming their unspoken understanding.

Kumar makes a series of calls, and they ring across various locations in Andhra and Telangana. The people answering these calls are mostly in their 50s, reflecting a range of different professions. However, there is one exception—a younger individual who answers his deceased father's phone.

Flashback: 1990s

Rajan is a highly intelligent and well-read individual, but his life has been marked by a strong undercurrent of anger. This anger has led him to leave various pursuits in his life. For example, he left the military after three years of training due to an unfair incident. He spent two years in priesthood but abandoned it when the higher-ranking priests ate before the regular seminarians. Similarly, he left police training when he felt disrespected. He pursued competitive exams not to secure a job but to prove his capabilities.

However, a significant shift occurred when Rajan witnessed the injustices faced by railway workers regarding their wages. He took on a railway job, not for personal gain, but to fight for the rights of the union workers. He succeeded in uniting railway workers across South India, leading a major protest for better wages. Tragically, during a scuffle at one of these protests, his wife, who was pregnant with their second child, suffered a miscarriage. This event caused Rajan to renounce violence and become more reticent, but it also drove a permanent wedge between him and his wife, who could never forgive him for his role in their child's loss.

Rajan continued to work as a railway employee and served as a union spokesperson, but he refrained from direct fieldwork. The younger, more fiery individuals he had initially inspired for protests across South India carried on with organizing, while Rajan observed from a distance.

Present:

Before departing for Mozambique, Rajan confides in Kari's wife about his involvement with the NCB, explaining that he has been coerced into being an informer to locate his son. Additionally, he's been tasked with uncovering information about the marijuana export operations and aiding the NCB in capturing Chacko in the act. His daughter-in-law is understandably concerned, urging Rajan not to go back alone. However, Rajan assures her not to worry, as two of his old and trusted friends will be joining him.

He then meets with the auditor to share a crucial piece of information, which he keeps confidential from his daughter-in-law. He instructs her that if she notices any unusual news or circumstances, she should immediately contact the auditor.

In Mozambique, Chacko becomes suspicious about the sudden and prolonged nature of Rajan's visit to India. However, Rajan manages to gain Chacko's trust by assisting him in securing his illegal funds in a more secure manner, which impresses Chacko.

Rajan receives information that the ship traveling from Tuticorin to Maputo makes a stop in Pemba. He decides to visit the port in Pemba to investigate whether the marijuana gets separated from their moringa consignment at this point. During this expedition, he crosses paths with Salvia, an African journalist on a mission to locate her journalist photographer friend, Fernando, who had been closely covering Chacko's story but mysteriously disappeared.

At first, Salvia is wary of Rajan, suspecting him to be one of Chacko's associates. However, she soon realizes that he is genuinely distressed and in search of answers. As they join forces, they find themselves being pursued by Chacko's men within the port.

As they prepare to leave the area, Rajan makes a crucial observation: the marijuana is indeed being separated from the moringa consignment at this location. Simultaneously, Salvia makes a grim discovery, spotting Fernando's lifeless body stored in an icebox. The shock of these revelations leaves them both deeply shaken.

In their daring escape from the port, Rajan's long-unused military skills come to the fore as he skillfully handles a firearm to fend off Chacko's pursuing men. He's not alone in this endeavor, as his associates from India, who have backgrounds as Olympic shooters and had joined the South Indian Railways along with him, also contribute their shooting expertise to ensure their successful escape.

Salvia takes a bold step and releases the videos captured by Fernando, which reveal Chacko's involvement in various illicit activities. She also shares footage of Fernando's lifeless body discovered in the port space linked to Chacko. In addition to this, Salvia exposes Chacko's alleged involvement in smuggling marijuana from India to Mozambique. These revelations quickly gain widespread attention, going viral.

As this shocking news spreads, it coincides with the morning of Chacko's son's arrival for the grand housewarming party at their newly constructed palace, situated by the beach and surrounded by 200 acres of land filled with tall trees.

Rajan contacts Arora to inform him that Chacko is in the palace, and they have collected all the necessary evidence. He urges Arora to proceed with the arrest immediately. However, Arora advises Rajan to wait until they receive approval from the Mozambique government before taking action.

This response triggers the return of Rajan's "angry young man" persona, and he loses his patience. He disconnects the communication with Arora and throws the device aside, signaling that he intends to act independently and take charge from this point onwards. Despite Arora's attempts to shout and regain control of the situation, Rajan has made up his mind, and there's no turning back.

In a tense and strenuous confrontation, Rajan, Salvia, and the two sharpshooters make their way into the palace to capture Chacko. However, their mission takes a distressing turn when Chacko activates a remote control button connected to a large crane holding Kari hostage in a poclain. After a protracted struggle, marked by Rajan's resourcefulness, he manages to rescue Kari, but Chacko escapes using a submarine just as Mozambique officials, Arora, and his team arrive.

Despite successfully saving his son, Rajan finds himself under arrest alongside Chacko when Arora and his team apprehend them. They are later extradited to India on charges of smuggling marijuana from India. As Kari pleads with Arora that they are inncoent, Rajan is simply smiling, seemingly at peace with his decision and its consequences.

As they arrive at Mumbai airport, a swarm of news agencies and reporters are awaiting them. Arora steps forward to address the media, announcing that the NCB has successfully apprehended a major drug smuggler who has been on the run for the past three decades. However, as Rajan and Kari enter the scene, the media's attention shifts to them, and they are bombarded with questions about how, as civilians, they were able to pull off such incredible feats.

Kari appears bewildered by the unexpected attention, while Arora seems both irritated and confused. He attempts to reiterate that Rajan and Kari are also involved in smuggling. However, a journalist strongly insists that they witnessed Rajan fighting against Chacko and his men to capture them. Arora is left even more shocked and puzzled but persists in claiming that Rajan and Kari were attempting to escape with Chacko. He goes on to assert that the father and son duo runs a company called Mithila Exports, which has been exporting marijuana from Mozambique to India.

Rajan's auditor interjects and asserts that Mithila Exports had been officially dissolved nearly a month ago, and no operations have been ongoing since that time. He further emphasizes that the containers associated with their company name are likely fake and have been used to falsely implicate Kari and Rajan in drug smuggling activities, aimed at defaming their reputation.

Amidst the bustling crowd, Rajan's wife and Kari's wife stand there with their children as a united family. They embrace one another, reuniting in the midst of joy and celebration. The entire village awaits their arrival, and the atmosphere is filled with happiness and merriment.

In a heartfelt moment, Rajan expresses his gratitude to Kari, saying, "Thanks for helping me realize that sometimes it needs to be about oneself and one's own people." In response, Kari shares his own appreciation, stating, "And thanks for making me see that sometimes, it cannot be just about oneself and one's own people, but the larger picture is important." Their exchange symbolizes a profound understanding and reconciliation between the two generations.

LOGLINE:

Rajan abandoned violence after his second child's accidental abortion, causing his wife to leave him. But 25 years later, in his early 60s, his firstborn vanishes, compelling him to reenter a world of violence. His quest exposes a web of family, sacrifice, and the shocking discovery that marijuana is being smuggled within moringa shipments from India to Mozambique, a land of deep secrets.
STORY

Naalu perukku nalladhuna edhuvumey thappu illa. -Rajan - Father

Enaku nalladhuna edhuvumey thappu illa. - Kari - Son

Past: 2005

Rajan, in his late 30s, is drunkenly lamenting in his dilapidated small house while his teenage son, Kari, lies beside him. Rajan reveals that when his wife asked him to abandon violence after Kari's birth, he complied. However, she also implored him to renounce the ideology he held dear when Kari's mother was expecting a child, and he vehemently resisted.

Rajan continues to reiterate that his wife left him because he firmly believed in the notion of "Naalu perukku nalladhuna edhuvumey thappu illa" (a famous movie dialogue from Nayagan, meaning "If something is good for even four people, then it's not wrong to do it"). He insists that the blame lies with his wife, even for his descent into alcoholism. His 15-year-old son, Kari, lying beside him, already irritated by Rajan's loud drunken voice, becomes even more agitated upon hearing his father blame his mother and pleads with his dad to keep quiet.

As Rajan doesn’t keep quiet, at one point Kari loses it and shouts at Rajan that he is the reason for his mother to leave and it is not her fault. This triggers Rajan utmost. Rajan gets up to throw Kari out of the house and that’s the last day they both ever had a face-to-face conversation in life. When Rajan wakes up the next morning, Kari is missing and Rajan goes on to find him at his Uncle Kumar’s place and Kari refuses to even take a look at Rajan. A turbulent relationship goes on to follow until Kari finishes his 12th grade to leave his village and move to city with his mother. 

Present: 2023

After almost 20 years, even for his wedding, Kari is stubborn not to invite his Father, Rajan. Though his uncle and his father’s cousin Kumar pressured Kari to invite Rajan, in vain Kari did not.

Kari is in his mid 30s, currently working in an MNC and living with his wife, two kids, and mother. Rajan is living in the same village in Guntur where he has now retired after 35 years of service in South Indian railways.

Frustrated Kari has a dream that disturbs him to being an entrepreneur and leaves his job. When his wife orders an expensive moringa product online, he is amazed at the potential moringa market has around the globe since growing up he has seen moringa trees almost anywhere and everywhere in his village.

Kari made the decision to export moringa from India to Mozambique, using the Tuticorin port for transportation by ship. To realize this plan, he returned to his village after an absence of nearly two decades, where he reconnected with Kumar. Much to his surprise, he discovered a vast grove of mature moringa trees that has been thriving for years. This abundance, along with the excellent potential for further cultivation, would prove adequate to meet the demand for large-scale exports to Mozambique and other nations.

Rajan in his early 60s now, however, remains adamant, countering Kari's decision. He argues, "You still can't see beyond yourself, Kari. If, by any chance, the promised export quantity and rate fail to materialize, and the villagers invest their borrowed money to cultivate moringa across their lands, it won't just be you who's at risk; the entire village will be in jeopardy."

Kari responds to Rajan, feeling angry about his resistance to change and a new approach. In his frustration, Kari departs from the village. Kumar, however, pledges to persuade some villagers to start harvesting moringa. If Kari can demonstrate real profits, he'll encourage the entire village to follow suit.

As promised, Kari begins exporting moringa from Guntur to Mozambique, delivering substantial returns to the villagers who invest in moringa farming and harvesting. This success sparks hope among more villagers, encouraging them to invest in moringa cultivation.

A year later, Kari returns to the village, and his arrival is met with widespread joy and happiness from almost every member of the village. Rajan, too, beams with pride and watches him from a distance, feeling genuinely happy for Kari. Kumar takes on the role of updating Rajan about Kari's life on an almost daily basis.

Suddenly, one morning, Kumar rushes to Rajan's house with an audio message he received from Kari. Rajan appears visibly upset and concerned. Anxious, Kumar asks if they shouldn't consider going to the police, as Kari suggests in the audio message. Rajan agrees, urging Kumar to keep the content of the audio note a secret but to inform the police that they have lost contact with Kari.

Kumar reveals that they urgently need to reach Kari because, in the past week, they had supplied five times more credit than usual, as per Kari's request, due to a sudden bulk order. If this extended credit is not repaid on time, the villagers will face hefty interest charges, potentially spiraling into a significant problem for those who invested in moringa cultivation. As mentioned in the audio note, if they fail to export the cultivated moringa now, it will be another six months before the yield, and the villagers might find themselves at an increased risk of resorting to suicides at an alarming rate.

Rajan reassures Kumar not to worry. He admits that he hasn't done much for his own son and isn't even sure if his son is alive. But he feels a responsibility to maintain the positive impact he's made in the village, bringing laughter and love after a long time. Regardless of the circumstances, Rajan is determined to ensure that this transformation continues, no matter what happens.

Kumar advises Rajan to remember that he's not the same person he was 25 years ago, and taking daring actions shouldn't be an option at their age. In response, Rajan subtly expresses that daring at this age makes even more sense.

Before departing, Rajan meets Kari's wife and his own wife in Hyderabad. He reassures them that Kari will be alright and promises to bring him back home. Rajan's wife, deeply upset, doesn't even make eye contact with him and continues to weep softly, repeating, "Kari should be safe."

As Rajan arrives in Mozambique, Bavuma, a friend and employee of Kari, picks him up. During the drive to the Moringa by-products factory, Rajan introduces himself as a representative sent by Kari's family to oversee operations until Kari reappears. He deliberately conceals the fact that Kari is his own son.

Their car is halted by a convoy of limousines, and Rajan inquires if it's the Mozambican Prime Minister's convoy. Bavuma chuckles and explains that it's not the PM but another influential figure in Mozambique – Chacko. Chacko is a man of Indian origin who has been settled in Africa for the past two to three centuries. He's regarded as the go-to person for any Asian living in Mozambique when they encounter problems, much like a Godfather figure.

In a short span of time, Rajan efficiently organizes the business and resumes moringa exports from his village. He settles in Mozambique and diligently seeks any available information about his son's fate, although his efforts prove futile.

As time passes, Rajan forges a strong and close relationship with Chacko, given their similar ages. Chacko often expresses that his primary motivation in life is his only son, who resides in London.

One day, after a night of heavy drinking with Chacko, Rajan decides to reveal the true reason behind his presence in Mozambique. However, just as he's about to disclose this secret, he receives a call from Kumar. Kumar informs him that their recent export shipment has been detained at Tuticorin port due to some GST-related clarifications. Kari is urgently required to resolve the matter since he is the primary business owner and managing partner. Kari's wife, who is only a partner in the export company, which is named after their daughter, "Mithila Exports," can't handle this situation alone.

In a rush, Rajan heads back to India, leaving Mozambique. His sudden departure leaves Chacko with some unanswered questions.

Upon landing at Bombay airport, Rajan is abruptly apprehended by NCB officials for interrogation. He is utterly shocked by the turn of events. Officer Arora accuses Rajan of smuggling marijuana from India to Mozambique, which Rajan vehemently denies, insisting that they export moringa, not marijuana.

Arora proceeds to open a box from their export, revealing fresh marijuana buds concealed within the center of tightly packed moringa leaves. Rajan is in disbelief, and Arora accuses Kari of having been involved in marijuana smuggling, having gone underground at some point, and alleges that Rajan has taken over his illicit operations. Rajan continues to deny the accusations, but Arora threatens to arrest his daughter-in-law, who is the other partner of Kari's export business, if he doesn't cooperate and reveal the truth.

Rajan asserts that he is willing to do whatever it takes to help uncover the truth and prove their innocence. At this point, Arora leans forward, showing Rajan a black-and-white picture and asking if he recognizes the person in it. Rajan, however, doesn't recognize the 30-year-old man in the picture and shakes his head.

Arora then identifies the individual as Ravi, a notorious gangster who has been evading the Indian NCB for two decades. He proceeds to show another picture, this time of Chacko, their business associate and friend in Mozambique. Rajan immediately confirms that the person in the picture is Chacko.

Arora moves in closer to Rajan and informs him that Ravi is also in the second picture. Rajan initially denies it, but after a brief pause and a closer look at both the old and new pictures, he suddenly shouts a swear word at the top of his voice, clearly distressed and shocked by the revelation.

MID-BLOCK

Rajan returns to Hyderabad and finds his wife bedridden, consumed with worry about Kari's well-being and whereabouts. Kumar updates him on the villagers' anxiety due to the shipment being held at the port. In response, Rajan provides assurance that everything will be resolved. He assures them that the shipment will be cleared the following day, as he has made all the necessary arrangements for its release.

Rajan sits beside his bedridden wife and expresses remorse for his life choices, acknowledging that he's been too focused on his ideologies and failed to prioritize his family. He recounts how he abandoned violence entirely 20 years ago when they lost their second child, but now, he feels compelled to return to it in order to protect their firstborn. His wife, lacking the energy to respond, simply nods with tears streaming down her face.

Rajan steps out of the room, and there stands Kumar, gazing at Rajan in surprise, a mixture of happiness and excitement lighting up his face. Rajan looks markedly different from the beginning of the film, with sharp, intense eyes and his hair pushed back, a departure from his usual side-parted look. Kumar, with nothing more than the intensity in his eyes, asks if things are as they seem. In response, Rajan simply nods his head, confirming their unspoken understanding.

Kumar makes a series of calls, and they ring across various locations in Andhra and Telangana. The people answering these calls are mostly in their 50s, reflecting a range of different professions. However, there is one exception—a younger individual who answers his deceased father's phone.

Flashback: 1990s

Rajan is a highly intelligent and well-read individual, but his life has been marked by a strong undercurrent of anger. This anger has led him to leave various pursuits in his life. For example, he left the military after three years of training due to an unfair incident. He spent two years in priesthood but abandoned it when the higher-ranking priests ate before the regular seminarians. Similarly, he left police training when he felt disrespected. He pursued competitive exams not to secure a job but to prove his capabilities.

However, a significant shift occurred when Rajan witnessed the injustices faced by railway workers regarding their wages. He took on a railway job, not for personal gain, but to fight for the rights of the union workers. He succeeded in uniting railway workers across South India, leading a major protest for better wages. Tragically, during a scuffle at one of these protests, his wife, who was pregnant with their second child, suffered a miscarriage. This event caused Rajan to renounce violence and become more reticent, but it also drove a permanent wedge between him and his wife, who could never forgive him for his role in their child's loss.

Rajan continued to work as a railway employee and served as a union spokesperson, but he refrained from direct fieldwork. The younger, more fiery individuals he had initially inspired for protests across South India carried on with organizing, while Rajan observed from a distance.

Present:

Before departing for Mozambique, Rajan confides in Kari's wife about his involvement with the NCB, explaining that he has been coerced into being an informer to locate his son. Additionally, he's been tasked with uncovering information about the marijuana export operations and aiding the NCB in capturing Chacko in the act. His daughter-in-law is understandably concerned, urging Rajan not to go back alone. However, Rajan assures her not to worry, as two of his old and trusted friends will be joining him.

He then meets with the auditor to share a crucial piece of information, which he keeps confidential from his daughter-in-law. He instructs her that if she notices any unusual news or circumstances, she should immediately contact the auditor.

In Mozambique, Chacko becomes suspicious about the sudden and prolonged nature of Rajan's visit to India. However, Rajan manages to gain Chacko's trust by assisting him in securing his illegal funds in a more secure manner, which impresses Chacko.

Rajan receives information that the ship traveling from Tuticorin to Maputo makes a stop in Pemba. He decides to visit the port in Pemba to investigate whether the marijuana gets separated from their moringa consignment at this point. During this expedition, he crosses paths with Salvia, an African journalist on a mission to locate her journalist photographer friend, Fernando, who had been closely covering Chacko's story but mysteriously disappeared.

At first, Salvia is wary of Rajan, suspecting him to be one of Chacko's associates. However, she soon realizes that he is genuinely distressed and in search of answers. As they join forces, they find themselves being pursued by Chacko's men within the port.

As they prepare to leave the area, Rajan makes a crucial observation: the marijuana is indeed being separated from the moringa consignment at this location. Simultaneously, Salvia makes a grim discovery, spotting Fernando's lifeless body stored in an icebox. The shock of these revelations leaves them both deeply shaken.

In their daring escape from the port, Rajan's long-unused military skills come to the fore as he skillfully handles a firearm to fend off Chacko's pursuing men. He's not alone in this endeavor, as his associates from India, who have backgrounds as Olympic shooters and had joined the South Indian Railways along with him, also contribute their shooting expertise to ensure their successful escape.

Salvia takes a bold step and releases the videos captured by Fernando, which reveal Chacko's involvement in various illicit activities. She also shares footage of Fernando's lifeless body discovered in the port space linked to Chacko. In addition to this, Salvia exposes Chacko's alleged involvement in smuggling marijuana from India to Mozambique. These revelations quickly gain widespread attention, going viral.

As this shocking news spreads, it coincides with the morning of Chacko's son's arrival for the grand housewarming party at their newly constructed palace, situated by the beach and surrounded by 200 acres of land filled with tall trees.

Rajan contacts Arora to inform him that Chacko is in the palace, and they have collected all the necessary evidence. He urges Arora to proceed with the arrest immediately. However, Arora advises Rajan to wait until they receive approval from the Mozambique government before taking action.

This response triggers the return of Rajan's "angry young man" persona, and he loses his patience. He disconnects the communication with Arora and throws the device aside, signaling that he intends to act independently and take charge from this point onwards. Despite Arora's attempts to shout and regain control of the situation, Rajan has made up his mind, and there's no turning back.

In a tense and strenuous confrontation, Rajan, Salvia, and the two sharpshooters make their way into the palace to capture Chacko. However, their mission takes a distressing turn when Chacko activates a remote control button connected to a large crane holding Kari hostage in a poclain. After a protracted struggle, marked by Rajan's resourcefulness, he manages to rescue Kari, but Chacko escapes using a submarine just as Mozambique officials, Arora, and his team arrive.

Despite successfully saving his son, Rajan finds himself under arrest alongside Chacko when Arora and his team apprehend them. They are later extradited to India on charges of smuggling marijuana from India. As Kari pleads with Arora that they are inncoent, Rajan is simply smiling, seemingly at peace with his decision and its consequences.

As they arrive at Mumbai airport, a swarm of news agencies and reporters are awaiting them. Arora steps forward to address the media, announcing that the NCB has successfully apprehended a major drug smuggler who has been on the run for the past three decades. However, as Rajan and Kari enter the scene, the media's attention shifts to them, and they are bombarded with questions about how, as civilians, they were able to pull off such incredible feats.

Kari appears bewildered by the unexpected attention, while Arora seems both irritated and confused. He attempts to reiterate that Rajan and Kari are also involved in smuggling. However, a journalist strongly insists that they witnessed Rajan fighting against Chacko and his men to capture them. Arora is left even more shocked and puzzled but persists in claiming that Rajan and Kari were attempting to escape with Chacko. He goes on to assert that the father and son duo runs a company called Mithila Exports, which has been exporting marijuana from Mozambique to India.

Rajan's auditor interjects and asserts that Mithila Exports had been officially dissolved nearly a month ago, and no operations have been ongoing since that time. He further emphasizes that the containers associated with their company name are likely fake and have been used to falsely implicate Kari and Rajan in drug smuggling activities, aimed at defaming their reputation.

Amidst the bustling crowd, Rajan's wife and Kari's wife stand there with their children as a united family. They embrace one another, reuniting in the midst of joy and celebration. The entire village awaits their arrival, and the atmosphere is filled with happiness and merriment.

In a heartfelt moment, Rajan expresses his gratitude to Kari, saying, "Thanks for helping me realize that sometimes it needs to be about oneself and one's own people." In response, Kari shares his own appreciation, stating, "And thanks for making me see that sometimes, it cannot be just about oneself and one's own people, but the larger picture is important." Their exchange symbolizes a profound understanding and reconciliation between the two generations.`,
  cfi: 5,
  tone: '',
  demography: '',
  era: '',
  setting: ''
};

const Playground = () => {
  const [inputData, setInputData] = useState(defaultValues);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(true);
  const [isSynopsisDialogOpen, setIsSynopsisDialogOpen] = useState(false);
  const [isFormHidden, setIsFormHidden] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [promptTemplate, setPromptTemplate] = useState(`
    You are tasked with creating a visually compelling pitch deck in {slides} slides as provided above and for the above provided inputs for a story.

    You will follow the specific JSON schema and structure detailed below.

    The structure is critical for programmatic parsing and replacement, so you must adhere strictly to it.

    Each slide must represent a key aspect of the story and can include a combination of backgrounds, images, text, and shapes as per the following schema.

    JSON Schema: 
    {
      "JSONDATA": {
        "presentation": {
          "id": "presentation_id",
          "title": "{title}",
          "author": "{author}",
          "timestamp": "Date",
          "slides": []
        }
      },
      "IMAGEDESC": []
    }

    Important Notes:
    Ensure that every image reference in JSONDATA has a corresponding description in IMAGEDESC, and vice versa. There should be no extra or missing references.
  `);

  const axiosInstance = useContext(AxiosContext);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (name) => (event, value) => {
    setInputData({ ...inputData, [name]: value });
  };

  const toggleSynopsisDialog = () => {
    setIsSynopsisDialogOpen(!isSynopsisDialogOpen);
  };

  const toggleFormVisibility = () => {
    setIsFormHidden(!isFormHidden);
  };
  

  const toggleAdvancedOptions = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  const handleClear = () => {
    setInputData(defaultValues);
  };

  const handleSubmit = async () => {
    try {
      // Collapse the advanced options on build
      setIsAdvancedOpen(false);
      setIsFormHidden(true);

      // Filter out empty fields and mandatory fields check
      const mandatoryFields = ['title', 'format', 'genre', 'logline', 'target', 'author'];
      for (const field of mandatoryFields) {
        if (!inputData[field]) {
          alert(`${field.charAt(0).toUpperCase() + field.slice(1)} is mandatory!`);
          return;
        }
      }

      // Replace placeholders in the prompt template with actual values
      let finalPrompt = promptTemplate;
      for (const key in inputData) {
        finalPrompt = finalPrompt.replace(`{${key}}`, inputData[key]);
      }

      console.log('request submitted')

      // API call with await and response handling
      const response = await axiosInstance.post('/slideGenerate', { prompt: finalPrompt });
      console.log('Slide generated:', response.data);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error generating slide:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>AI Deck Generator Playground</Typography>
      {!isFormHidden && (

        <Box mt={2}>

          {/* Basic Information */}
          <TextField
            fullWidth
            size="small"
            label="Title"
            name="title"
            value={inputData.title}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            size="small"
            label="Format"
            name="format"
            value={inputData.format}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            size="small"
            label="Genre"
            name="genre"
            value={inputData.genre}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            size="small"
            label="Logline"
            name="logline"
            value={inputData.logline}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            multiline
          />
          <TextField
            fullWidth
            size="small"
            label="Target"
            name="target"
            value={inputData.target}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            size="small"
            label="Author"
            name="author"
            value={inputData.author}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />

          {/* No of Slides */}
          <Typography gutterBottom>No of Slides (7-10)</Typography>
          <Slider
            value={inputData.slides || 7}
            min={7}
            max={10}
            step={1}
            onChange={handleSliderChange('slides')}
            valueLabelDisplay="auto"
          />

          {/* Synopsis with Expandable Dialog */}
          <Box display="flex" alignItems="center">
            <TextField
              fullWidth
              size="small"
              label="Synopsis"
              name="synopsis"
              value={inputData.synopsis}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
            <Button variant="outlined" onClick={toggleSynopsisDialog} style={{ marginLeft: '10px' }}>
              Expand
            </Button>
          </Box>

          <Dialog open={isSynopsisDialogOpen} onClose={toggleSynopsisDialog} maxWidth="md" fullWidth>
            <DialogTitle>Synopsis</DialogTitle>
            <DialogContent>
              <TextField
                fullWidth
                label="Synopsis"
                name="synopsis"
                value={inputData.synopsis}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={15}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={toggleSynopsisDialog}>Close</Button>
            </DialogActions>
          </Dialog>

          {/* Advanced Options */}
          <Collapse in={isAdvancedOpen}>
            <Box mt={2}>
              <Typography gutterBottom>Creative Freedom Index (0-10)</Typography>
              <Slider
                value={inputData.cfi || 5}
                min={0}
                max={10}
                step={1}
                onChange={handleSliderChange('cfi')}
                valueLabelDisplay="auto"
              />
              <TextField
                fullWidth
                size="small"
                label="Tone"
                name="tone"
                value={inputData.tone}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                size="small"
                label="Demography"
                name="demography"
                value={inputData.demography}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                size="small"
                label="Era"
                name="era"
                value={inputData.era}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                size="small"
                label="Setting"
                name="setting"
                value={inputData.setting}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
            </Box>
          </Collapse>

          {/* Build and Clear Buttons */}
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={toggleAdvancedOptions}>
              {isAdvancedOpen ? 'Collapse Advanced Options' : 'Show Advanced Options'}
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Build
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClear}>
              Clear
            </Button>
          </Box>

          {/* Editable Prompt Template */}
          <Box mt={2}>
            <Typography gutterBottom>Prompt Template</Typography>
            <TextField
              fullWidth
              size="small"
              label="Prompt Template"
              name="promptTemplate"
              value={promptTemplate}
              onChange={(e) => setPromptTemplate(e.target.value)}
              variant="outlined"
              multiline
              rows={8}
            />

          </Box>


        </Box>
      )}
      <Button variant="outlined" onClick={toggleFormVisibility}>
        {isFormHidden ? 'Expand Form' : 'Hide Form'}
      </Button>
      {responseData && (
        <Paper elevation={3} style={{ padding: '16px', marginTop: '20px' }}>
          <Typography variant="h6">Response Data:</Typography>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </Paper>
      )}

    </Container>
  );
};

export default Playground;
