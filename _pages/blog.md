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


## [VRCopilot: Authoring 3D Layouts with Generative AI Models in VR](https://doi.org/10.1145/3654777.3676451)
Year: 2024  
Author: Zhang et al.  

**Abstract:**  
VRCopilot introduces a mixed-initiative system that integrates pre-trained generative AI models into Virtual Reality (VR) authoring workflows. The system enables users to co-create 3D interior layouts through multimodal interaction (speech + pointing), automatic generation, and scaffolded wireframe creation. By combining human agency with AI-assisted automation, VRCopilot bridges the gap between manual 3D design and AI-driven generation. Evaluations reveal that users perceive greater agency and creativity when using scaffolded or manual modes compared to fully automatic generation, suggesting that AI augmentation—not automation—best supports creativity in immersive environments.

**Summary:**  
This work explores how generative AI can enhance immersive 3D design without reducing user control. Built in Unity and powered by ATISS (an autoregressive transformer for indoor scene synthesis) and GPT-4-turbo, VRCopilot allows users to generate, refine, and customize room layouts inside VR. The system offers three co-creation modes:  
1. Manual Creation: Users manually place or request individual items through speech + pointing (“Put-that-there”) interactions.  
2. Automatic Creation: The AI generates full-room layouts automatically for review or modification.  
3. Scaffolded Creation: Users draw 2D wireframes as intermediate representations that are later converted into detailed 3D furniture layouts.  

Two user studies compared these modes:  
- Study 1 found that AI assistance increases design diversity but reduces perceived control.  
- Study 2 showed that wireframe scaffolding restored user agency and encouraged high-level, functional thinking, while manual creation fostered the highest creativity through multiple AI-generated suggestions.  

Overall, participants preferred AI-augmented co-creation (manual + scaffolded) over fully automated design. The authors recommend designing transparent, controllable intermediate representations to support creativity and collaboration in future immersive systems.

**Comments:**  
This paper effectively demonstrates how human–AI co-creation in VR can balance automation and user control. The introduction of wireframes as low-fidelity, manipulable intermediates offers a valuable design principle for immersive tools—allowing users to maintain ownership while benefiting from AI’s efficiency. The study also reveals a broader insight: users feel most creative when AI acts as a collaborator, not a replacement. Future extensions could involve adaptive AI steering based on user feedback, supporting iterative design across architecture, education, and entertainment contexts.

> <span style="color:gray">Zhang, Lei, Jin Pan, Jacob Gettig, Steve Oney, and Anhong Guo. "VRCopilot: Authoring 3D Layouts with Generative AI Models in VR." *Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology (UIST ’24)*, Pittsburgh, PA, 2024. ACM. https://doi.org/10.1145/3654777.3676451</span>