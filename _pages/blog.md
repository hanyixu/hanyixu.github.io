---
layout: single
title: "blog"
permalink: /blog/
author_profile: true
redirect_from:
  - /blogs
---

Here are some interesting papers I read.


## [VRCopilot: Authoring 3D Layouts with Generative AI Models in VR](https://doi.org/10.1145/3654777.3676451)
Year: 2024  
Author: Zhang et al.  

Abstract:  
VRCopilot introduces a mixed-initiative system that integrates pre-trained generative AI models into Virtual Reality (VR) authoring workflows. The system enables users to co-create 3D interior layouts through multimodal interaction (speech + pointing), automatic generation, and scaffolded wireframe creation. By combining human agency with AI-assisted automation, VRCopilot bridges the gap between manual 3D design and AI-driven generation. Evaluations reveal that users perceive greater agency and creativity when using scaffolded or manual modes compared to fully automatic generation, suggesting that AI augmentation—not automation—best supports creativity in immersive environments.

Summary:  
This work explores how generative AI can enhance immersive 3D design without reducing user control. Built in Unity and powered by ATISS (an autoregressive transformer for indoor scene synthesis) and GPT-4-turbo, VRCopilot allows users to generate, refine, and customize room layouts inside VR. The system offers three co-creation modes:  
1. Manual Creation: Users manually place or request individual items through speech + pointing (“Put-that-there”) interactions.  
2. Automatic Creation: The AI generates full-room layouts automatically for review or modification.  
3. Scaffolded Creation: Users draw 2D wireframes as intermediate representations that are later converted into detailed 3D furniture layouts.  

Two user studies compared these modes:  
- Study 1 found that AI assistance increases design diversity but reduces perceived control.  
- Study 2 showed that wireframe scaffolding restored user agency and encouraged high-level, functional thinking, while manual creation fostered the highest creativity through multiple AI-generated suggestions.  

Overall, participants preferred AI-augmented co-creation (manual + scaffolded) over fully automated design. The authors recommend designing transparent, controllable intermediate representations to support creativity and collaboration in future immersive systems.

Comments:  
This paper effectively demonstrates how human–AI co-creation in VR can balance automation and user control. The introduction of wireframes as low-fidelity, manipulable intermediates offers a valuable design principle for immersive tools—allowing users to maintain ownership while benefiting from AI’s efficiency. The study also reveals a broader insight: users feel most creative when AI acts as a collaborator, not a replacement. Future extensions could involve adaptive AI steering based on user feedback, supporting iterative design across architecture, education, and entertainment contexts.

> <span style="color:gray">Zhang, Lei, Jin Pan, Jacob Gettig, Steve Oney, and Anhong Guo. "VRCopilot: Authoring 3D Layouts with Generative AI Models in VR." *Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology (UIST ’24)*, Pittsburgh, PA, 2024. ACM. https://doi.org/10.1145/3654777.3676451</span>


## [XaiR: An XR Platform that Integrates Large Language Models with the Physical World](https://doi.org/10.1109/ISMAR62088.2024.00091)  
Year: 2024  
Author: Srinidhi et al.  

Abstract:  
XaiR is an open-source platform that bridges Multimodal Large Language Models (MLLMs) with Extended Reality (XR) systems to improve machine understanding of physical spaces. The system addresses the computational limitations of XR headsets by introducing a split architecture—offloading heavy MLLM inference to a server while keeping 3D world processing on the headset. Through its core components—the Reality Encoder, LLM Backend, and Reality Decoder—XaiR captures egocentric images and audio, processes contextual reasoning via models such as GPT-4V and Ferret, and anchors AI-generated AR overlays in physical environments.  
A 15-participant user study found that XaiR achieved over 90% accuracy in task guidance and 85% accuracy in AR anchoring, performing comparably to human operators in cognitive-assistant tasks like furniture assembly and coffee making. While humans were slightly faster and induced lower cognitive load (NASA-TLX), XaiR demonstrated high potential for scalable, model-driven physical task guidance.

Summary:  
XaiR exemplifies how AI-XR integration can enable intelligent, embodied systems that understand and respond to real-world contexts. Built on Magic Leap 2 and server-side MLLM inference (using GPT-4V for reasoning and Ferret for spatial grounding), XaiR allows users to interact with the physical world through natural language and egocentric visual input.  
The paper outlines two demonstration modes:  

1. Instruction Generation – Experts perform a task while XaiR records egocentric video and speech. The system uses GPT-4V to summarize 10-second video segments, generating step-by-step textual instructions tailored to the tools and actions observed.  
2. Live Cognitive Assistance – Novice users perform the same task while XaiR provides AR feedback, indicating relevant objects and verifying progress through real-time image analysis and reasoning prompts.  

Results indicate that MLLMs can approximate human-level comprehension for physical guidance tasks, though they require more user queries and slightly higher mental effort. Further experiments showed that providing two image frames plus textual context offered the optimal balance between accuracy and latency (~4.2 s total).  

Comments:  
This paper contributes a crucial step toward LLM-grounded embodied intelligence, extending large models’ capabilities from 2D text/image reasoning to 3D situational understanding. The Reality Encoder–Decoder pipeline and cloud–edge hybrid design are valuable templates for future XR-AI systems. XaiR’s comparative study with human baselines provides a rare benchmark for assessing AI spatial reasoning in real-world contexts. Future directions include improving spatial grounding accuracy, reducing latency, and exploring continuous object tracking to create more responsive and adaptive XR assistants for education, manufacturing, and daily cognitive support.  

> <span style="color:gray">Srinidhi, Sruti, Edward Lu, and Anthony Rowe. "XaiR: An XR Platform that Integrates Large Language Models with the Physical World." *Proceedings of the 2024 IEEE International Symposium on Mixed and Augmented Reality (ISMAR 2024)*, Bosch Research & Carnegie Mellon University. IEEE, 2024. https://doi.org/10.1109/ISMAR62088.2024.00091</span>


## [Traversing Dual Realities: Investigating Techniques for Transitioning 3D Objects between Desktop and Augmented Reality Environments](https://doi.org/10.1145/3706598.3713949)  
Year: 2025  
Author: Rau et al.  

Abstract:  
This study explores how 3D digital objects can be seamlessly moved between desktop and augmented reality (AR) environments to support hybrid workflows. The authors propose and evaluate three baseline transition techniques—Button Press, Close Grab, and Distant Grab—each designed to facilitate the transfer of 3D objects between 2D desktop and 3D AR contexts. Through two user studies, the paper investigates usability, intuitiveness, and real-world applicability of these techniques. Findings highlight that users strongly prefer gesture-based transitions for their intuitiveness and embodiment, while button-based methods offer greater precision and lower error rates.  

Summary:  
The researchers developed and tested transition techniques that enable users to “pass” 3D objects between desktop and AR spaces without interrupting workflow. Built in Unity using the Meta Quest 3 and Microsoft HoloLens 2, the system allows bidirectional object transfer via gestures or key inputs.  

**Study 1 (N=18)** compared three technique pairs:  
1. **Button Press** (keyboard-triggered transition)  
2. **Close Grab** (direct hand “grab and pull”/“push” motion)  
3. **Distant Grab** (mid-air gestures using extended reach).  

Results showed that Close Grab was most preferred despite being more physically demanding. Participants found hand gestures more natural and intuitive, while animations were useful only when the object traveled a large distance (>40 cm).  

**Study 2 (N=6)** involved expert computational chemists using refined versions of these techniques to manipulate molecular models. They reported that transitions made it easier to alternate between simulation on the desktop and spatial inspection in AR. Experts instinctively adopted different techniques depending on distance, preferring Distant Pull/Throw and Close Grab for their realism and flow. Overall, they supported the idea of integrating multiple transition methods into daily 3D workflows.  

**Key Insights:**  
- Hand gestures are preferred for natural 3D interaction, whereas switching to mouse/keyboard breaks immersion.  
- Providing multiple transition modes at varying distances supports flexibility and user comfort.  
- Animation aids spatial continuity only when positional shifts are large.  
- Real-world experts in computational chemistry envision practical use cases for these transitions in 3D modeling, visualization, and collaboration.  

Comments:  
This paper advances cross-reality interaction research by formalizing and evaluating techniques for transferring digital content between desktop and AR environments. Its methodological rigor—combining controlled usability tests with expert validation—sets a precedent for future cross-reality design research. The findings demonstrate that effective hybrid environments rely on *gesture-based continuity* rather than rigid input separation. Future work could explore multi-user collaboration, adaptive transitions based on context, and extended applications in engineering and data visualization.  

> <span style="color:gray">Rau, Tobias, Tobias Isenberg, Andreas Koehn, Michael Sedlmair, and Benjamin Lee. "Traversing Dual Realities: Investigating Techniques for Transitioning 3D Objects between Desktop and Augmented Reality Environments." *Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI ’25)*, Yokohama, Japan, 2025. ACM. https://doi.org/10.1145/3706598.3713949</span>
