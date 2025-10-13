---
layout: single
title: "blog"
permalink: /blog/
author_profile: true
redirect_from:
  - /blogs
---

Here are some interesting papers I read.


## [May The Force be With You: Cloning Distant Objects to Improve Medium-Field Interactions in Augmented Reality](https://ieeexplore.ieee.org/document/10937415)
Year: 2025  
Author: Tamboli et al.

**Abstract:**  
Augmented Reality (AR) interactions increasingly involve manipulating virtual objects at varying distances. The study introduces **“The Force,”** a novel technique allowing users to **clone distant objects** into miniature, manipulable replicas that can be handled within near-field range. This method is evaluated against traditional **controller-based raycasting** and **gaze-based pinching** techniques through a controlled pick-and-place experiment using the Magic Leap 2 headset. Results reveal that The Force yields **higher accuracy and efficiency** for medium-field tasks, reducing cognitive load and improving spatial precision. The paper discusses implications for **future AR interaction design**, emphasizing direct, intuitive, and physically grounded manipulation.

**Summary:**  
This research addresses challenges in AR when users interact with **medium- or far-field objects** (1.5–30 meters away). Traditional methods like **raycasting** or **gaze-based control** introduce inaccuracies due to depth perception issues and hand jitter. “The Force” solves this by allowing users to **clone distant objects into near-field miniatures**, making manipulation as natural as handling nearby items.  

The study compares three techniques:
1. **Raycast + Controller:** Projects a virtual ray from a controller to select and move objects.  
2. **Gaze + Pinch:** Uses gaze for targeting and hand gestures for manipulation.  
3. **The Force:** Clones distant objects into smaller near-field replicas for direct hand manipulation.  

In experiments involving a **pick-and-place task** with color-coded cubes, participants achieved **faster completion times and higher placement accuracy** using The Force. It also improved user satisfaction and reduced workload in cluttered environments where precision was required. The technique draws inspiration from “**Worlds in Miniature (WIM)**” and “**Voodoo Dolls**” approaches but differs by letting users selectively choose which objects to clone, offering **greater control and flexibility**.  

The authors conclude that transforming distant manipulation into **localized interaction tasks** enhances both usability and immersion in AR. Future research will refine the technique to integrate with **collaborative and industrial applications**.

**Comments:**  
This paper presents a creative extension of **embodied interaction** in AR, bridging **human perceptual limitations** with digital control. The notion of **cloning distant objects** introduces both ergonomic and cognitive advantages, particularly for **industrial design, architecture, or collaborative AR settings**.  
A key strength is its **empirical validation**, contrasting The Force with existing interaction paradigms. However, the approach still depends on **gesture precision and object recognition stability**—aspects that can vary across AR platforms. It would be interesting to integrate **AI-driven gesture prediction** or **adaptive scaling** to automate miniature creation, merging this method with gaze-driven context awareness for fully immersive, intelligent interfaces.

> <span style="color:gray">Tamboli, Danish Nisar Ahmed, et al. "May The Force be With You: Cloning Distant Objects to Improve Medium-Field Interactions in Augmented Reality." *2025 IEEE Conference on Virtual Reality and 3D User Interfaces (VR)*, 2025, pp. 472–479. IEEE.</span> :contentReference[oaicite:0]{index=0}


---

## [Reality Proxy: Fluid Interactions with Real-World Objects in MR via Abstract Representations](https://arxiv.org/abs/2507.17248)
Year: 2025  
Author: Liu et al.

**Abstract:**  
**Reality Proxy** introduces a system for **decoupling interaction from physical constraints** in Mixed Reality (MR) by creating **abstract proxies**—digital representations synchronized with real-world objects. These proxies allow users to select, group, and manipulate distant or occluded objects easily. Using **AI-driven scene understanding** and **semantic representation**, the system supports complex interactions like multi-object selection, filtering, and grouping without requiring new gestures. Evaluations with MR experts highlight its usability and potential to redefine MR interface paradigms.

**Summary:**  
This paper addresses a central problem in MR: users struggle to interact with **real-world objects that are distant, crowded, or partially occluded**. Conventional systems like **Apple Vision Pro** and **Meta Quest** rely on **raycasting** or **gaze-based selection**, which often lead to inaccuracy and fatigue.  

**Reality Proxy** overcomes these issues by **shifting interaction from the real object to a digital proxy**, enabling precise, fluid control while maintaining intuitive direct manipulation. These proxies, generated near the user’s hand, represent physical items and are enhanced with **semantic attributes and hierarchical spatial information** through AI models.

The system operates in three stages:
1. **Proxy Activation:** Seamlessly integrated into gaze + pinch gestures; automatically detects objects within gaze range.  
2. **AI Scene Understanding:** Uses **DINO-X** for object detection and **GPT-4o** for semantic attribute extraction, constructing a structured representation of the environment.  
3. **Proxy Interaction:** Enables **brushing, grouping, zooming, and attribute filtering** without adding new gestures.  

Applications demonstrate its versatility:
- **Office information retrieval** (e.g., scanning and grouping books or sticky notes).  
- **Building navigation** using digital twins.  
- **Multi-drone control** through spatial grouping and attribute-based manipulation.  

An expert review with ten XR specialists confirmed that the system is **intuitive, efficient, and broadly applicable**, suggesting that **proxy-based abstraction** may become a fundamental paradigm in future MR interfaces.

**Comments:**  
There needs to be a paradigm shift away from scientific, data-driven, office-based considerations when it comes to designing XR systems. The average user has no patience or desire to wade through menus, select filters, or otherwise customize selection options. The goal of the authors seems to be a seamless integration of the virtual and the real. In the introduction, they critique the vanguards of XR development for creating systems that involve “laborious single-object targeting [and] bulky spatial menus” (2), but the whole concept of Reality Proxies seems little more than a glorified menu system. They’ve removed the bulk by scaling the menus down and giving them a bit of spatial orientation, but at base it’s still a menu system.  

XR should not break or decouple the user from immersion in the real. If the goal is a seamless blend of real and virtual, where one becomes indistinguishable from the other, all forms of abstraction have the end result of miring the user in the virtual at the expense of the real. The proxy system being a series of abstractions thus runs counter to the aim of a seamless mixing of the two. The real world is not abstract - if you take concrete objects and transform them into abstractions, generated via AI or otherwise, you’ve essentially broken the user’s immersion.

The initial conception of the Reality Proxy is also rather unintuitive. A user wants to see an object in the distance and have it immediately within his grasp - not navigate through a series of boxes that all look the same to find the correct one. The authors mention a potential form of disambiguation being the “[attachment of] a thumbnail of each physical object…onto its proxy, which would help disambiguate proxies.” Let’s think about this for a minute - you see an object off in the distance and want to bring it closer to you. Instead, you get a series of boxes all of the same size and shape with little avatars of the objects superimposed on the boxes. This is like running an early 2000s discussion forum on top of a reality simulator. The authors seem to be papering over the fact that proxies are at base just menu windows.

It’s not an entirely bad system - whether or not user experience was overall positive and how reliable those self-reports are left aside, my idea would be a little different. I envision something of a point -> materialize system; raycasting does have limitations, i.e., hand jitter, but pointing is intuitive. We all do it - see an object in the distance, point to draw attention to it. The issue of multi-object selection or dense clusters/small objects might be rectified via a cluster threshold whereby all objects below a certain size are treated as a single object when pointing, but rather than abstract menus as representations, you have virtual representations of the objects themselves, perhaps fanned out and scaled up, where a second point discards the excess immediately and leaves you with the desired object. Single objects are grabbed into short range immediately - Meta’s Building Blocks actually already does something like this via the grab functionality, no? 

> <span style="color:gray">Liu, Xiaoan, et al. "Reality Proxy: Fluid Interactions with Real-World Objects in MR via Abstract Representations." *Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology (UIST ’25)*, Busan, Republic of Korea, 2025. ACM.</span> :contentReference[oaicite:1]{index=1}
