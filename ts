[33mcommit 2a3333be5e01c0c0a7770265ba05580a34f0299f[m[33m ([m[1;36mHEAD -> [m[1;32mRefactor-drag-cards-handler[m[33m, [m[1;31morigin/Refactor-drag-cards-handler[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Sat Oct 17 12:05:25 2020 +0200

    Updated drag feature so card appears on new position already on drag over & corrected bug with sending put request for every drag over event

[33mcommit e72b31ce9161c4d8957b8592a8ba698a295c2478[m[33m ([m[1;32mdevelopment[m[33m)[m
Merge: 1a0740f 94a9f46
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Fri Oct 16 22:54:50 2020 +0200

    Merge with developemnt, updated loading card from db to cards.* so ids are assigned correctly and removed print statements from main

[33mcommit 94a9f463fa00c5482bd12cacb4fecd882decb19b[m[33m ([m[1;31morigin/live_sync[m[33m, [m[1;31morigin/development[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: bartcapote <gauclee@gmail.com>
Date:   Fri Aug 14 12:25:56 2020 +0200

    Change connection setup to local

[33mcommit 44f6f43d7abbc1f7b7f27614319b45b65efa400c[m
Author: bartcapote <gauclee@gmail.com>
Date:   Fri Aug 14 10:29:57 2020 +0200

    Edit connection

[33mcommit 86251d20cc1f4977b469b41f513273295185ebd2[m
Merge: d98e078 43f527f
Author: bartcapote <gauclee@gmail.com>
Date:   Fri Aug 14 10:12:44 2020 +0200

    Merge branch 'development' into live_sync

[33mcommit d98e078e6f9d4762944f08f148bd95af0dd0e35b[m
Author: bartcapote <gauclee@gmail.com>
Date:   Fri Aug 14 09:59:22 2020 +0200

    Add WS public change transmission

[33mcommit 43f527ffb1a32b7bf5404a6778c8f590708e33e5[m
Merge: 6443ec1 3851b76
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Fri Aug 14 09:53:53 2020 +0200

    Merge pull request #57 from CodecoolGlobal/15_Private_boards
    
    Add options for logged in user to create and access private boards

[33mcommit 3851b76cb206b0c3f0663543f8a2432c4ad6d91d[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Fri Aug 14 05:49:15 2020 +0200

    Add options for logged in user to create and access private boards

[33mcommit 1a0740f1ed2a15fdd16d740152a2cf63eb340722[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Fri Aug 14 05:40:08 2020 +0200

    Add option for private boards for logged in user

[33mcommit 6443ec19a62133fb7ad1a95156db01369c592d98[m
Merge: a07f4f4 6457e33
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Thu Aug 13 20:01:00 2020 +0200

    Merge pull request #56 from CodecoolGlobal/15_Private_boards
    
    15 private boards

[33mcommit 6457e3362ec0b8e6ff0c0c977014eaf3fe07c7c6[m
Merge: c007a49 a07f4f4
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 19:59:37 2020 +0200

    merge

[33mcommit c007a498e14f01abc427565a000e44c6ac3de370[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 19:17:34 2020 +0200

    Add options to save private boards for logged in user (currently still visible to all)

[33mcommit a07f4f403f9abad89d7786ef380fb23b4cce839f[m
Merge: 5d823cc 2eca94f
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Thu Aug 13 18:28:12 2020 +0200

    Merge pull request #55 from CodecoolGlobal/refresh_button
    
    Add a sync button in navbar

[33mcommit 2eca94f906172cd58bf9d002a3b423644ee789bb[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 18:25:48 2020 +0200

    Add a sync button in navbar

[33mcommit 5d823cc13bfb699e3159c108e02365a2ed896c0c[m
Merge: c7486bf b89b49e
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Thu Aug 13 17:58:28 2020 +0200

    Merge pull request #53 from CodecoolGlobal/bart_refactor
    
    Refactor status_handler.js

[33mcommit 8848b74ede40dd4efa76bdf3591c9756fff7f849[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 16:58:47 2020 +0200

    Corrected function for getting boards from db - error in last pr

[33mcommit d3dac50d6e7281f8d3c0decce36f65317539f7f8[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 16:55:16 2020 +0200

    Modified database save of new boards data for logged in user and public

[33mcommit b89b49e495538913cfa8a7b80eb9746dca7b0b61[m[33m ([m[1;31morigin/bart_refactor[m[33m)[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 16:53:01 2020 +0200

    Refactor status_handler.js

[33mcommit c7486bf395b66425815791ec1b96cb43382ba824[m
Merge: 3a8b306 b651003
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 16:48:46 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit 3a8b306e0f66548388b31a5d9ec2a584c276aad3[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 16:47:57 2020 +0200

    Make sure board deletion cascades throughout schema

[33mcommit b1329a4fa210f373d22521b668fec8ac5995873f[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 15:55:17 2020 +0200

    Add local storage for storing user_id of logged user

[33mcommit b6510036e9438a84adfd10806e95b3ba0ab97a84[m
Merge: 5f141b3 b24eeef
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 14:59:15 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit b24eeefd6752679c8c8a8f8c0c28b2d6f89e1540[m
Merge: 965a9a7 249fed1
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Aug 13 14:57:03 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit 965a9a75cb492147138a748339ebcd8ccf2086df[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Aug 13 14:56:35 2020 +0200

    Fixed ordering cards and deleting board listener

[33mcommit 249fed14ba9e06734b32567e3c5b2c4edb5ad75b[m
Merge: 70fdf8b 7fd9095
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Thu Aug 13 14:53:59 2020 +0200

    Merge pull request #52 from CodecoolGlobal/bart_refactor
    
    Bart refactor

[33mcommit 7fd9095ec42fb9f4850fc8f396f6ca11ad8ba21e[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 14:52:26 2020 +0200

    Fix last commit - mistake

[33mcommit 1ad66e1807035a85a497395ebf9dd82c18af8f2e[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 14:50:10 2020 +0200

    Merge

[33mcommit a86282ce0760d9564a053c5c10cb62ff8d2a734c[m
Merge: f160db7 70fdf8b
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 14:49:37 2020 +0200

    Merge branch 'development' into bart_refactor

[33mcommit f160db747e92d72b79b2a906ffc52e26065baa9e[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 14:39:42 2020 +0200

    Refactor

[33mcommit 5f141b306ed7f757cb37f77a9238c2156ef4fcf2[m
Merge: 87db3eb 70fdf8b
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 14:34:45 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit 70fdf8bd2526b23d5c2842cfc2f053d91adebe90[m
Merge: 6279604 a4613fa
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Thu Aug 13 14:34:22 2020 +0200

    Merge pull request #51 from CodecoolGlobal/16-Delete-boards
    
    16 delete boards

[33mcommit a4613fa1af37cb610c2e3e904aed1a0c84325fe1[m[33m ([m[1;31morigin/16-Delete-boards[m[33m)[m
Merge: fabb634 6279604
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Aug 13 14:27:57 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 16-Delete-boards

[33mcommit 87db3ebd233988deef1a2682c6ad80efcf8161e8[m
Merge: dbbf2bb 6279604
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 14:23:59 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit dbbf2bbdac07c4442910f04f20742769834e5104[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 14:23:46 2020 +0200

    Set user-id in local storage

[33mcommit 627960480d844ba3beef1cd2f6dc75509283e9b5[m
Merge: b52d230 422225a
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 14:18:41 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit b52d230b2127c2583a77e41b7359d88d05d3a3f9[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 14:18:25 2020 +0200

    Refactor: utility functions -> util.js

[33mcommit fabb634e9ee46fc933ca27261e50397b3994843c[m
Merge: 85c2ec4 422225a
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Aug 13 14:05:00 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 16-Delete-boards

[33mcommit 85c2ec4816e2eb95439766890c15d28ef9987c48[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Aug 13 14:04:47 2020 +0200

    Add remove board feature

[33mcommit 6b0ba342ff4a32d68a32a17009aabb8b6316089f[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Aug 13 14:02:54 2020 +0200

    Add cascade deleting

[33mcommit 422225a35ddc74ddc0973056a54c2293a5348225[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 14:01:50 2020 +0200

    Fixed bug with closing Submit modal with New Board data

[33mcommit a39736064993ba0a1265c8d3f8a7ed5724b36e12[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 13:54:03 2020 +0200

    Refactor last commit

[33mcommit 30622b7789e8d32ed5bdd953de1ebbf5d195655b[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 13:47:14 2020 +0200

    Make cards draggable again(after rename)

[33mcommit 411417e253e5831d86692012000d9bc515c52a3a[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 13:44:25 2020 +0200

    Autofocus and select renaming fields

[33mcommit d592bdfad3b28a0594819f2386e5681bb6ea1dc0[m
Merge: 11722f1 83b959e
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 13:29:53 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit 83b959eabc75aaf362b058981392d788def032c7[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 13:19:15 2020 +0200

    Changed textarea to input under board title

[33mcommit 5519e6107738d91e7c08b0c4503afb179847f642[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Aug 13 12:04:06 2020 +0200

    Add autofocus on input when editing card

[33mcommit 11722f1ef3ec6dc358d4b614331cfc39686b6c60[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 11:37:15 2020 +0200

    Change connection data to deploy

[33mcommit 207f45c110b43c76d7b0af13a0b82b8b701846b1[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Aug 13 11:30:41 2020 +0200

    Init dragNdrop on new status

[33mcommit 6ef6cc89da15afdee515f92d275fa03e44585eca[m
Merge: 9d44890 9839100
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Thu Aug 13 11:18:03 2020 +0200

    Merge pull request #50 from CodecoolGlobal/Refactor_data_functions_v2
    
    Refactor

[33mcommit 9839100b48236592ed4bfc44fdc9b95dc859436b[m[33m ([m[1;31morigin/Refactor_data_functions_v2[m[33m, [m[1;32mRefactor_data_functions_v2[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Aug 13 11:15:17 2020 +0200

    Refactor

[33mcommit 9d44890afe5c649991c457aae949fa0eaa440b8b[m[33m ([m[1;31morigin/Refactor[m[33m, [m[1;32mRefactor[m[33m)[m
Merge: f1244d7 2369fd1
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Wed Aug 12 22:34:14 2020 +0200

    Merge pull request #48 from CodecoolGlobal/fix_default_statuses
    
    Copy default statuses on board creation

[33mcommit 2369fd1889fbab072bc48c7a1b00d24cd53f15af[m[33m ([m[1;31morigin/fix_default_statuses[m[33m)[m
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Aug 12 22:25:42 2020 +0200

    Fix default statuses

[33mcommit 153fd50503e03cee6e59c35862a844d7a5af9d40[m
Merge: 3f29edc f1244d7
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Aug 12 22:07:56 2020 +0200

    Merge branch 'development' into fix_default_statuses

[33mcommit 3f29edca88c6ad65c27575a0b26904b3c9059022[m
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Aug 12 22:07:21 2020 +0200

    Try to fix statuses

[33mcommit 99a5736b8edf6ea2ed9a9b465798665c1bef3d33[m
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Aug 12 21:28:13 2020 +0200

    Try to fix starter values

[33mcommit c151cf9477bb5d6187b729cca4a0f019e7750fe6[m
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Aug 12 20:31:00 2020 +0200

    Comment out setting counters in db

[33mcommit 1eec3ac67dbb0501f1784b1c886f2d7215dbb18c[m
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Aug 12 20:02:41 2020 +0200

    Copy default statuses on board creation

[33mcommit f1244d7fac3572899f3bd8ab75fc61b3e04f5150[m[33m ([m[1;32m10-Change-card-status[m[33m)[m
Merge: dcfe500 1624f69
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Wed Aug 12 17:29:42 2020 +0200

    Merge pull request #47 from CodecoolGlobal/10-Change-card-status
    
    Add dragCardsHandler function to addCard so new cards can be dragged …

[33mcommit 1624f69a513ac30968e2a3f182f19cedc7a98f3b[m[33m ([m[1;31morigin/10-Change-card-status[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Aug 12 17:15:17 2020 +0200

    Add dragCardsHandler function to addCard so new cards can be dragged and dropped

[33mcommit dcfe5000ff3347225cee46f56b17e45f23b0ce6e[m
Merge: 4cde632 a920b7e
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Wed Aug 12 17:03:06 2020 +0200

    Merge pull request #46 from CodecoolGlobal/13-user-login
    
    13 user login

[33mcommit a920b7e50e8ce93daee522e490e0ed9b45905b59[m[33m ([m[1;31morigin/13-user-login[m[33m)[m
Merge: 7cdfec2 1917f29
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Aug 12 15:56:08 2020 +0200

    Manually merge

[33mcommit 7cdfec2808dc8601e8641e35107e554ed3b1316b[m
Merge: 7945e9a 4cde632
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Aug 12 15:24:30 2020 +0200

    Manually merge

[33mcommit 1917f29133f8d2c8ad30a49dcd84c9a2c6868b51[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Aug 12 15:05:09 2020 +0200

    Updated functions to add new cards

[33mcommit 5e3540f730a7409d8f17eddbdc808c85426e4f39[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Aug 12 14:30:58 2020 +0200

    Updated query to save cards statuses and order after drag and drop

[33mcommit 7945e9ac489cd6d57f827704fdd5db8b3d5a5ece[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Aug 12 14:28:57 2020 +0200

    Logout feature working

[33mcommit 4cde632854771afa0c6d4e1a5338a1430b95e1ae[m
Merge: 2dbe0f3 4b832ec
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Wed Aug 12 12:59:15 2020 +0200

    Merge pull request #44 from CodecoolGlobal/10-Change-card-status
    
    Add functions to put data of updated cards after drag and drop to url…

[33mcommit d94ae1c17d3502dbf56ac1c1ad835545f31288c5[m
Merge: 4b832ec 2dbe0f3
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Aug 12 12:37:57 2020 +0200

    Merge branch 'development' into 10-Change-card-status

[33mcommit 4b832ec9f2402ee400793f85f3fee27d8a9ee280[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Aug 12 12:35:52 2020 +0200

    Add functions to put data of updated cards after drag and drop to url cards_statuses, query to be written

[33mcommit daf1e866db50dd4e14b1eb34195565f96633d3ca[m
Merge: 615fc35 2dbe0f3
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Aug 12 11:48:26 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 13-user-login

[33mcommit 615fc352d6d33f72a4282ab876d721cd4b41a089[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Aug 12 11:47:57 2020 +0200

    Login feature working

[33mcommit 2dbe0f3247ce9ef4c87234ec9f2e15d9eee9617b[m
Merge: e7f58b1 18c893b
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Wed Aug 12 11:38:19 2020 +0200

    Merge pull request #43 from CodecoolGlobal/10-Change-card-status
    
    Corrected card dragging so it is possiblie only within one board, als…

[33mcommit 18c893bd518eba92586c306e6d1d6d6d036e0839[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Aug 12 11:05:22 2020 +0200

    Corrected card dragging so it is possiblie only within one board, also switched event  from dragover to dragdrop

[33mcommit 8554d1dd2847599a88d02165c8a364d8074b249e[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Aug 12 10:56:42 2020 +0200

    Add login feature (with few bugs)

[33mcommit 9ec12d75271c06a8f6a74b4cd1aa311ad4012a51[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Aug 12 10:56:19 2020 +0200

    Add get user by email query

[33mcommit e714555ead7aa520b17dff5eaf5d74eaca426e5f[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Aug 12 10:55:30 2020 +0200

    Add verify password func

[33mcommit bd17cf5be6df6041159300015a263451ba003650[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Aug 12 10:54:30 2020 +0200

    Add login modal

[33mcommit e7f58b18438ea9bef422e4d71aa927b17f4816fd[m
Merge: ca2d4e5 a4f02bd
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Wed Aug 12 09:58:11 2020 +0200

    Merge pull request #41 from CodecoolGlobal/10-Change-card-status
    
    Corrected cards dargging functions so cards can be ordered

[33mcommit ca2d4e503d4eaafc024a1b6954a4b54b8a6e1131[m
Merge: 5512502 7e57547
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Wed Aug 12 09:54:15 2020 +0200

    Merge pull request #40 from CodecoolGlobal/delete_status
    
    Delete status

[33mcommit 7e575471843c9a9945279426028bf2716048bd3a[m[33m ([m[1;31morigin/delete_status[m[33m)[m
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Aug 12 09:51:51 2020 +0200

    Add missing object literal in _api_delete call

[33mcommit a4f02bd2f224a2df8a6ce68fa53297a38843d071[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Tue Aug 11 23:27:50 2020 +0200

    Corrected cards dargging functions so cards can be ordered

[33mcommit b4fe7011bc701f39be20a529019e4eb9c14f95e7[m[33m ([m[1;31morigin/12-user-registration[m[33m)[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 22:32:25 2020 +0200

    Add working registration form with validates inputs

[33mcommit a2a9a91840aaacf4235a15090b64c6cef0c9dd22[m
Author: bartcapote <gauclee@gmail.com>
Date:   Tue Aug 11 22:00:52 2020 +0200

    Add botch-up spinner for status delete bttn

[33mcommit df126031f76ebc888028be3cc43060ce8c807f68[m
Author: bartcapote <gauclee@gmail.com>
Date:   Tue Aug 11 15:11:44 2020 +0200

    Add delete status button functionality

[33mcommit 5512502919129a125641f35d76558b640b82967d[m
Merge: 5c0e1c9 1f625c9
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Tue Aug 11 16:01:10 2020 +0200

    Merge pull request #39 from CodecoolGlobal/12-user-registration
    
    12 user registration

[33mcommit 1f625c915734aaee39c814e05d5497482686be28[m
Merge: b84de28 5c0e1c9
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 15:59:22 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 12-user-registration

[33mcommit b84de2806f7de29e71da6c96a91534b186aa8dd5[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 15:57:30 2020 +0200

    Fixed bug with multiply users

[33mcommit 5c0e1c993409f9485b50c784212c6b6ef326c684[m
Merge: 2b59117 7780404
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Tue Aug 11 15:31:53 2020 +0200

    Merge pull request #38 from CodecoolGlobal/12-user-registration
    
    12 user registration

[33mcommit 77804041dd5fd1630b54282cc4cdc59877383021[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 15:22:22 2020 +0200

    Plug registration in DB

[33mcommit add1edba39508649ee4ee7de9607692d13943561[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 15:20:43 2020 +0200

    Add bcrypt

[33mcommit 7b347b8454c362bd91e14e14b3a3127d6e76f829[m
Author: bartcapote <gauclee@gmail.com>
Date:   Tue Aug 11 14:54:26 2020 +0200

    Add delete button in status title

[33mcommit 2b591173f83b70bc68bdae995ce5b5cc2510ff68[m[33m ([m[1;32mregistration_test[m[33m)[m
Merge: 1fbae6f 003d85d
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Tue Aug 11 13:08:06 2020 +0200

    Merge pull request #37 from CodecoolGlobal/18-delete-card
    
    Delete cards working

[33mcommit 1fbae6f1383089820522aaa4c1686006ed295628[m
Merge: d2a371c 9b1d28d
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Tue Aug 11 13:07:05 2020 +0200

    Merge pull request #36 from CodecoolGlobal/add_new_board_refactor
    
    Modified updating new board title

[33mcommit 9b1d28d2bad64cb23d1aa502d16a030c4a247fe9[m[33m ([m[1;31morigin/add_new_board_refactor[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Tue Aug 11 12:59:07 2020 +0200

    Modified updating new board title

[33mcommit d2a371c6cc064539239e329c1d7f25a0fa755dc5[m
Author: bartcapote <gauclee@gmail.com>
Date:   Tue Aug 11 12:59:04 2020 +0200

    Fix minor reference bug

[33mcommit 003d85d9ff4655f0d3c41521d7de9114313ca2c5[m[33m ([m[1;31morigin/18-delete-card[m[33m)[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 12:55:47 2020 +0200

    Delete cards working

[33mcommit 7ea65d57d20061087344a91a32261ac8c1af5a0e[m
Merge: 2f915ed 7a52fdc
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Tue Aug 11 12:54:50 2020 +0200

    Merge pull request #35 from CodecoolGlobal/add_new_board_refactor
    
    Modified functions for cerating new board

[33mcommit 2f915edbaaa4d49cf7f5c87ddf085ea6a9ba23c4[m
Author: bartcapote <gauclee@gmail.com>
Date:   Tue Aug 11 12:52:51 2020 +0200

    Fix adding status to use current DB schema

[33mcommit 7a52fdcca2801b1db0170ec60fd2c30779300702[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Tue Aug 11 12:50:18 2020 +0200

    Modified functions for cerating new board

[33mcommit 1b1c4352a85f9b89896950f9a90611a25f6714c2[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Tue Aug 11 12:21:55 2020 +0200

    add sorting to statuses in get_boards function

[33mcommit 203059770b02915e6d3f1e72b3715dbb6ee227e1[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 12:12:28 2020 +0200

    fixed typo

[33mcommit 71eefee26988a04dde56d76fd8742221a28d3d8d[m
Merge: 15a20be e81ff19
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Tue Aug 11 12:06:56 2020 +0200

    Merge pull request #34 from CodecoolGlobal/8-Create-card
    
    8 create card

[33mcommit 15a20be17c9fd66b17520cac7c0fcfed9ca35911[m
Merge: f3f457f 87ff068
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Tue Aug 11 12:06:43 2020 +0200

    Merge pull request #33 from CodecoolGlobal/database_update
    
    Database update

[33mcommit e81ff19e5b7317ddb6fed7db9184481424bd396e[m[33m ([m[1;31morigin/8-Create-card[m[33m)[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 11:56:57 2020 +0200

    Delete testing paragraph

[33mcommit 7241b7904819d43df59bea055c3d8efb224015a2[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 11:56:23 2020 +0200

    Little refactor

[33mcommit ced687f4ad82930bdfde6839c4ab14403acef99d[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 11:55:33 2020 +0200

    Modify get cards query

[33mcommit e6d4532abc0e984f7f2da13b4314e4f66a48ead2[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Aug 11 11:54:38 2020 +0200

    Makes RESTFULL routes with cards

[33mcommit 87ff068876cc6d1d06ddfdf1d4608717a0a035e7[m[33m ([m[1;31morigin/database_update[m[33m, [m[1;32mdatabase_update[m[33m)[m
Merge: 95844ae 1beef56
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Mon Aug 10 18:21:44 2020 +0200

    commit after merge

[33mcommit 95844ae91fe853d3b498005c105ae9fab9300c98[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Mon Aug 10 18:15:00 2020 +0200

    updated query for getting boards data and refactor code

[33mcommit 1beef56d85b2b6bf75a455ccc161d14d7280477f[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Mon Aug 10 15:46:23 2020 +0200

    Change get boards query

[33mcommit 5a8d47f168ff08bc563bdf7a08ddf267e4711282[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Mon Aug 10 15:14:18 2020 +0200

    Add title aliases

[33mcommit e52ddccaffbd54852d189d2c414489ce0f6d6881[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Mon Aug 10 15:08:18 2020 +0200

    Test queries

[33mcommit f3f457f688db9490134f84f012237c47687ba771[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Mon Aug 10 10:54:00 2020 +0200

    deploy test2

[33mcommit 2691e0a2bf89ec1d4017bef658cb037962fa6c46[m
Merge: d4b4e3c 4cfd30c
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Mon Aug 10 10:37:42 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit d4b4e3cf6aabf714bb1e3f31a3046567b3bea206[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Mon Aug 10 10:36:05 2020 +0200

    deploy test

[33mcommit 4cfd30ced5022219944b411505c9a7516ae8c3e1[m
Author: bartcapote <gauclee@gmail.com>
Date:   Mon Aug 10 10:32:19 2020 +0200

    Test commit1

[33mcommit ed03db5e6612fb05f88c8c3ff9247ee002e70973[m[33m ([m[1;31mheroku/development[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Mon Aug 10 10:22:12 2020 +0200

    Test commit

[33mcommit 292128bd25ec9c1c261d560075a308ee4dd6d32d[m[33m ([m[1;31mheroku/master[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Mon Aug 10 10:00:29 2020 +0200

    add config for deploy

[33mcommit e2c5e496ac18fc80ca8c599869d3465af1cc6d65[m
Merge: db01b49 7c09956
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Fri Jul 17 10:19:08 2020 +0200

    Merge pull request #32 from CodecoolGlobal/12-user-registration
    
    12 user registration

[33mcommit 7c09956408718fb7b9d2494852c7e8fa0de2e71a[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Fri Jul 17 10:15:33 2020 +0200

    find typo. fixed

[33mcommit 08da8ac18d5fa8a5db7cbc69f977d21a3de682d2[m
Merge: 8bebf79 db01b49
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Fri Jul 17 10:06:31 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 12-user-registration

[33mcommit 8bebf7993e7ad8f900caba39a6f029408688cd0c[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Fri Jul 17 10:06:20 2020 +0200

    find typo. fixed

[33mcommit db01b490f91bce052f08a6cd155f29dc11814bdf[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Fri Jul 17 10:05:09 2020 +0200

    Fixed new board

[33mcommit ecf28a44c1452c316269842f0c7753f75f2279b9[m
Merge: e1a9bd7 08049f8
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Fri Jul 17 09:56:20 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 12-user-registration

[33mcommit 08049f85897fead80da922205c7f3f45efe55c7a[m
Merge: b19d1c7 e8bd3ae
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Fri Jul 17 09:47:29 2020 +0200

    Merge pull request #31 from CodecoolGlobal/clea-console-log-updated-variable-names
    
    Added small corrections

[33mcommit e8bd3aefbb032aabfb6193d57af46615d3874435[m[33m ([m[1;31morigin/clea-console-log-updated-variable-names[m[33m, [m[1;32mclea-console-log-updated-variable-names[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Fri Jul 17 09:42:44 2020 +0200

    Added small corrections

[33mcommit b19d1c7acb58ffaf3572bb0274e1c0519755b01a[m
Merge: d743feb 1db0bfa
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Fri Jul 17 09:41:31 2020 +0200

    Merge pull request #30 from CodecoolGlobal/Iss_05
    
    Iss_05

[33mcommit 1db0bfac6ff4da546a50358938ee7eb23c34ebaf[m[33m ([m[1;31morigin/Iss_05[m[33m)[m
Author: bartcapote <gauclee@gmail.com>
Date:   Fri Jul 17 09:38:38 2020 +0200

    Fix Iss_05

[33mcommit e1a9bd71952e624296d3387f6ce992d2ab3783d2[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Fri Jul 17 09:37:25 2020 +0200

    Add registration popup. Inputs are validated. Not working with sql yet.

[33mcommit d743feb3cd182455383962e5cc1d80a8e5fd6389[m
Merge: e91cd1c c449c1b
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Thu Jul 16 23:50:27 2020 +0200

    Merge pull request #27 from CodecoolGlobal/9-order-the-cards
    
    Added function to reorder cards not synced with db yet

[33mcommit c449c1b516255e1e18665e7d02d9a1509cce5246[m[33m ([m[1;31morigin/9-order-the-cards[m[33m, [m[1;32m9-order-the-cards[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 23:08:15 2020 +0200

    added draggable atribute to cards after merge

[33mcommit bc80ef2a919f3cb715b60f2f6a8b06627faf30f5[m
Merge: 291b3a1 b2c0628
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 23:07:25 2020 +0200

    Merge branch '9-order-the-cards' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 9-order-the-cards

[33mcommit 291b3a169720e615eace4a0938ff3fd8965040eb[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 23:06:50 2020 +0200

    Added atribute draggable to cards in cards_handler

[33mcommit b2c06286b6b210efaf9567886d069d6591e22383[m
Merge: ed66487 e91cd1c
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Thu Jul 16 23:04:35 2020 +0200

    Merge branch 'development' into 9-order-the-cards

[33mcommit 1721f1be4953decbdaf548e4e8af179b236e5356[m
Merge: ed66487 e91cd1c
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 23:02:43 2020 +0200

    merge with development

[33mcommit ed66487b90eca24cb920769e5317f576cc0894ea[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 22:57:34 2020 +0200

    Added function to reorder cards not synced with db yet

[33mcommit e91cd1c7e7b53670de64d53bcf3a6df3e663d77c[m
Merge: 07240c6 109f910
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Thu Jul 16 22:54:31 2020 +0200

    Merge pull request #24 from CodecoolGlobal/rename_columns
    
    Rename columns (async status title update)

[33mcommit 109f9104dee78ce78eab23e4dd34336a2c208314[m[33m ([m[1;31morigin/rename_columns[m[33m)[m
Merge: 72e9e16 07240c6
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 22:41:17 2020 +0200

    Merge branch 'development' into rename_columns

[33mcommit 72e9e16bf553687306501e1774af1eae5e84c396[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 21:13:54 2020 +0200

    Rename columns

[33mcommit 07240c6c0e59d8e026b4c1d5d6be322da12ffd92[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 21:24:14 2020 +0200

    Better fix

[33mcommit 41f0da7fb18766195450ca596904990e87058d85[m
Merge: 2a67c9d b8da521
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 21:22:46 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit 2a67c9d74b68128da948eeb8a494507a44f8a785[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 21:18:14 2020 +0200

    Fix incorrect id's for numbers 10+

[33mcommit b8da5216926dcdfa94e3aede646c563491fe3683[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 21:18:14 2020 +0200

    Fix incorrect id's for numbers 10+

[33mcommit fb3f8773a574452a7766bf2824f8c22247a27a73[m
Merge: ae21650 ec0acd6
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Thu Jul 16 20:41:24 2020 +0200

    Merge pull request #23 from CodecoolGlobal/18-delete-card
    
    18 delete card

[33mcommit ec0acd6f1544e9b08aa4cfc780579ed18d634f4a[m
Merge: 162af42 ae21650
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 20:25:18 2020 +0200

    Manual merge

[33mcommit 162af42d8e14592bb6276d02fb2bbd25af6cedf1[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 20:22:56 2020 +0200

    Deleting cards works!

[33mcommit ae21650a24243bcf49e05131c1627642ec851cec[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 19:33:28 2020 +0200

    Merge Fix

[33mcommit 91473409e167a110567da01a59612a1885f9d3d2[m
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Thu Jul 16 19:03:54 2020 +0200

    Dodawanie statusów działa jak należy (#21)
    
    * Fix. n
    ow a new status also adds proper relations to DB
    
    * Fix. new status now adds proper relations to DB

[33mcommit 58aeb2b8a4e10691b143a2ee036b224d30862a75[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 17:24:14 2020 +0200

    Changed route names

[33mcommit f624b90f159806dd12d2c3bcbadaedd79117c397[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 17:12:08 2020 +0200

    Fixed bug with cards name.

[33mcommit 3657c52436b0bfe8bc4c5991f9fddf79f49c89e0[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 16:30:53 2020 +0200

    Delete unused debug print

[33mcommit 2224714d27dd3dc1d551d7e4e67dc8ebfe788796[m
Merge: a19efa3 62582aa
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 16:24:24 2020 +0200

    Merge branch 'development' into bart

[33mcommit a19efa3d32527e1d3abb334a11fa9a9e6190ace3[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 16:22:29 2020 +0200

    Add new status now works with SQL

[33mcommit 62582aad7b799761becf4c3413aebe1e88e03a8a[m
Merge: e1338d1 3fc0086
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Thu Jul 16 16:15:50 2020 +0200

    Merge pull request #19 from CodecoolGlobal/5-Edit-card
    
    5 edit card

[33mcommit 3fc0086840424756412ca7defd619ab45bd7c66d[m[33m ([m[1;31morigin/5-Edit-card[m[33m)[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 15:44:55 2020 +0200

    Add delete icon on cards

[33mcommit 860093d3e7549d9a517d7f1e63bf4ac0f481620d[m
Merge: 42e78c3 e1338d1
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 14:58:58 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 5-Edit-card

[33mcommit 42e78c3937f6955b6c1d281236ec566ca20830f3[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 14:50:53 2020 +0200

    Add new js module with cards handler

[33mcommit e1338d1e53efd45fb2d311c34105d4f63f6f5ca6[m[33m ([m[1;32mrefactor-html[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 14:17:50 2020 +0200

    Fixed bug with incorrected column titles (again :) !

[33mcommit 4aacc4c7e1760bff441080290134b94452d701a4[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 14:08:04 2020 +0200

    Fixed bug with id of new card. It adds automatically now

[33mcommit ba2d65c7dde0e4da315d0a5df24e51f8c56b947b[m
Merge: 6d5cfef b6d8246
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Thu Jul 16 13:40:06 2020 +0200

    Merge pull request #18 from CodecoolGlobal/5-Edit-card
    
    5 edit card

[33mcommit 468472c9e1a4f4d7e103475c1bbc8ca11d20ab35[m
Merge: 270adae 6d5cfef
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 13:14:02 2020 +0200

    Merge branch 'development' into bart

[33mcommit 6d5cfef64d183cd26337e64f043dc78a3f75effb[m
Merge: 168943c 92c951c
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 13:13:40 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit 168943c9aad2cdd869770018ec9f7fde1926cc98[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 13:13:15 2020 +0200

    Add new requirements and fix some PEP8 whitespace

[33mcommit 92c951c8bc977203fe4402c0094f07c1283d912f[m
Merge: 84f60ea 4d987b1
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Thu Jul 16 13:05:35 2020 +0200

    Merge pull request #17 from CodecoolGlobal/5-edit-card-title
    
    Fixed but with column titles displayed as numbers

[33mcommit b6d82465a8f584e39a1f80d0992821b548b71f12[m
Merge: 9a2ece0 84f60ea
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 13:01:40 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 5-Edit-card

[33mcommit 9a2ece062078fcae7e5ba70ebcb887e11d2325f9[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 13:01:23 2020 +0200

    Rename cards title works

[33mcommit 84f60ea776c3c3c313b95ecf612dae822760bf46[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 11:54:20 2020 +0200

    corrected typo

[33mcommit 270adae0d8ef2fe88523db887170e005523e4fc0[m
Author: bartcapote <gauclee@gmail.com>
Date:   Thu Jul 16 11:39:48 2020 +0200

    Convert new status functionality to use DB

[33mcommit 0973d91569709c8e3127cfe809fd0c2187bc6439[m
Merge: 251fc6a 6958e2d
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 11:15:31 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 5-Edit-card

[33mcommit 6958e2d05f3cf33e133fb2f4ae5f0828543ac39a[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 11:09:29 2020 +0200

    Add database config file

[33mcommit 513fd394c2c22169c6746090c8ff5cf4b924e61d[m
Merge: 6997796 601a75b
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Thu Jul 16 10:20:07 2020 +0200

    Merge pull request #16 from CodecoolGlobal/refactor-html
    
    Fixed bug with displaying  new board column names as numbers

[33mcommit 601a75b5d5df80d07a63f2222beb585407ed0eba[m[33m ([m[1;31morigin/refactor-html[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 10:18:59 2020 +0200

    Fixed bug with displaying  new board column names as numbers

[33mcommit 4d987b10a081d96c4345e8b0bffa3ab9f9ecc80f[m[33m ([m[1;31morigin/5-edit-card-title[m[33m, [m[1;32m5-edit-card-title[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 10:13:11 2020 +0200

    Fixed but with column titles displayed as numbers

[33mcommit 251fc6a1eff0c705464bf88d750c4b265e1ccda2[m
Merge: df9d7d2 6997796
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 09:20:44 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 5-Edit-card

[33mcommit 69977964f6683036cf40659fe70ddd14512895ee[m
Merge: 4e6f5f2 3b40da8
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Thu Jul 16 09:20:32 2020 +0200

    Merge pull request #15 from CodecoolGlobal/5-edit-card-title
    
    adding small changes in css

[33mcommit df9d7d2f1907b1eb1925ba078e60acdca4dff175[m
Merge: 64053e9 4e6f5f2
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 09:18:52 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 5-Edit-card

[33mcommit 3b40da80870ea2bff865bc90778d293366dd76fa[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 09:15:28 2020 +0200

    adding small changes in css

[33mcommit 4e6f5f2ebe3d0f52e3f57b403d094fc1a20e289a[m
Merge: 616a99c 6ed8f54
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Thu Jul 16 09:07:41 2020 +0200

    Merge pull request #13 from CodecoolGlobal/5-edit-card-title
    
    Added functions to edit board title

[33mcommit 6ed8f54054cc524ef4e4b2e3b50f8e808dc2ccd3[m
Merge: 1a75505 616a99c
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 02:21:48 2020 +0200

    merged with development

[33mcommit 1a755053ce1ee44ec0f42516875bf8fafcb1f49c[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Thu Jul 16 02:08:36 2020 +0200

    Added functions to edit board title

[33mcommit 64053e96fd5876b12e19b46c76c93c2cf78ab4a5[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 01:47:24 2020 +0200

    Change card title works without saving into DB

[33mcommit 616a99c1f1c9d80c974f9cc459d0a9bc373caacb[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Thu Jul 16 00:06:41 2020 +0200

    Fixed bug with boards id.

[33mcommit f6efd2c55caf7d9766b4522eb8a1b7cbd3c347e3[m
Merge: a1ed904 86ac81b
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Wed Jul 15 23:45:59 2020 +0200

    Merge pull request #12 from CodecoolGlobal/8-Create-card
    
    Adding cards works with sql. ID also

[33mcommit 86ac81b3bdcb4692dd7a6a43325126c127add6fa[m
Merge: aefe4f6 a1ed904
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Wed Jul 15 23:45:44 2020 +0200

    Merge branch 'development' into 8-Create-card

[33mcommit a1ed9040be23bb41b18738dc2897b532ff6c9d52[m[33m ([m[1;32mtest[m[33m)[m
Merge: 1582d16 7f00d66
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Wed Jul 15 23:06:32 2020 +0200

    Merge pull request #11 from CodecoolGlobal/sql-database
    
    Sql database

[33mcommit aefe4f6eab39edd297f75ea8ebf1c2f48c925323[m[33m ([m[1;32m8-Create-card[m[33m)[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Jul 15 22:02:21 2020 +0200

    Adding cards works with sql. ID also

[33mcommit 7f00d66adcc771a34a954bf16e6a825376bf854e[m[33m ([m[1;31morigin/sql-database[m[33m, [m[1;32msql-database[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Jul 15 21:51:12 2020 +0200

    Modified Submitting new board so modla is closed after Save button is clicked

[33mcommit 54c26774a3071e5ac50e5af2a6557a7cd6c85aed[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Jul 15 21:41:14 2020 +0200

    Modified functions for getting and adding new board to use sql db

[33mcommit 1582d16acf832d66031f8106ed90bf01f45b5b55[m
Merge: 741360d 9cbaa3e
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Wed Jul 15 20:47:03 2020 +0200

    Merge pull request #10 from CodecoolGlobal/sql-database
    
    Add database sql queries, example tables with pks and fks created

[33mcommit 9cbaa3ec30d99639960a8b1b5f02644c0fd77b5d[m
Merge: 1af436b 741360d
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Wed Jul 15 20:46:50 2020 +0200

    Merge branch 'development' into sql-database

[33mcommit 1af436bfafecc68fa6c21d3348a74b4499ee91ac[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Jul 15 20:44:07 2020 +0200

    Add users table to DB

[33mcommit e7eaef9580aba6d88d4bcd5fce25480626d3f8db[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Jul 15 19:06:47 2020 +0200

    Add database sql queries, example tables with pks and fks created

[33mcommit 741360d84e48d7bba853d7a31ba262aaaa2738e6[m
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Jul 15 17:37:11 2020 +0200

    Fix bugs, add alert on fetch error

[33mcommit 38d1f9cdd4280dbea40f4895ff4bf8221c39cfde[m
Merge: d85e1f3 026cb36
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Jul 15 17:26:49 2020 +0200

    Merge branch 'development' into bart

[33mcommit d85e1f374527b06ec6a76e860356f2f6de1c916b[m
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Jul 15 17:09:51 2020 +0200

    Save new status and add it to dom from modal

[33mcommit 026cb364748abbc6e26e2fb195c934810a3cdf7d[m
Merge: 8d34744 7c46ad3
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Wed Jul 15 14:57:35 2020 +0200

    Merge pull request #8 from CodecoolGlobal/8-Create-card
    
    8 create card

[33mcommit 7c46ad36709da1fd70788b18db7811696b39f5a6[m[33m ([m[1;32m2-create-public-boards[m[33m)[m
Merge: 96bebe7 8d34744
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Jul 15 14:47:56 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into 8-Create-card

[33mcommit 8d34744c5a167fcc27c9982742f421b59d505526[m
Merge: a85eb4c 3a2a3e8
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Wed Jul 15 14:47:06 2020 +0200

    Merge pull request #7 from CodecoolGlobal/2-create-public-boards
    
    Add functions to display new board on webpage

[33mcommit 96bebe74d46524733e857904b3033bd298b4ceba[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Jul 15 14:44:50 2020 +0200

    Added card are saved into csv file

[33mcommit 3a2a3e8304d291fe9aae715b6a14b758950f1375[m[33m ([m[1;31morigin/2-create-public-boards[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Jul 15 14:27:12 2020 +0200

    Modified styles for modal for adding new board

[33mcommit 3de82c9960d952a3f9b1f548159d4a306d134c8c[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Jul 15 13:30:06 2020 +0200

    Add functions to display new board on webpage

[33mcommit a3c1c471553eee022da67afa5cca09a3c9d175f7[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Jul 15 12:45:45 2020 +0200

    Finish adding cards into right statuses

[33mcommit 0031f656aacb55465f744644f9093bf5ae46e993[m
Merge: 71cec28 a85eb4c
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Jul 15 11:35:47 2020 +0200

    Manual merge with dev

[33mcommit 71cec2869784ea7ae48fe532e72a03d7b9408118[m
Merge: 27e739c 524e26d
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Wed Jul 15 11:24:02 2020 +0200

    Manual merge with dev

[33mcommit 34b8512febe4d944a7c0d6d40f71c857bdcc1b1c[m
Merge: 4131f98 a85eb4c
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Jul 15 11:30:22 2020 +0200

    Merge branch 'development' into bart

[33mcommit a85eb4cd2aa6bdc40e2ec39e3784252f0981104f[m
Merge: 524e26d 4982a2c
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Wed Jul 15 11:28:54 2020 +0200

    Merge pull request #6 from CodecoolGlobal/2-create-public-boards
    
    2 create public boards

[33mcommit 4982a2c1801f2672d7f2b7fd42d04fc97f6d36c8[m
Merge: 47a5441 524e26d
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Jul 15 11:27:09 2020 +0200

    Merge branch 'development' into 2-create-public-boards

[33mcommit 47a5441fba1fe0efafe5138cea10a5ebbcb9f39a[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Jul 15 11:24:32 2020 +0200

    Updated function to post data for new board

[33mcommit 4131f98dbb7ae587ff269fa24d5e6cc6c74a5146[m
Merge: 63cfb15 524e26d
Author: bartcapote <gauclee@gmail.com>
Date:   Wed Jul 15 11:14:09 2020 +0200

    Merge branch 'development' into bart

[33mcommit 524e26df98d23512450d891bdccc4f22de483c59[m
Merge: 28e7d35 f518dd3
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Wed Jul 15 10:40:25 2020 +0200

    Merge pull request #5 from CodecoolGlobal/2-create-public-boards
    
    2 create public boards

[33mcommit f518dd39207cd6aab72ac39cad3f855c80d0cb9a[m
Merge: e006f6e 28e7d35
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Jul 15 10:36:47 2020 +0200

    merge

[33mcommit e006f6e0d167530af1e698612dc51113a11bbfe9[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Wed Jul 15 10:14:50 2020 +0200

    Add functions to save new board data to cvs file

[33mcommit 27e739c0cb3ccaa571dc3ded6f660ba9723cf93f[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Jul 14 23:07:52 2020 +0200

    Add addCard func. Works on site only.

[33mcommit 6ec73efd99a454cf91fd603299e8b6b871cc8205[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Jul 14 22:55:50 2020 +0200

    Add getCardsByBoardId func.

[33mcommit 28e7d35137dfba2b14fc9e1557b63e6ddc9c0429[m
Merge: ddc8999 6059906
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Tue Jul 14 21:50:07 2020 +0200

    Merge pull request #4 from CodecoolGlobal/bart
    
    Add modal with field to enter new status name

[33mcommit 63cfb15bca8b1bbaa7dd9683ae6870f0485c6100[m
Author: bartcapote <gauclee@gmail.com>
Date:   Tue Jul 14 21:20:51 2020 +0200

    Save new status from popup

[33mcommit 60599069eb196c7a126d9d9dfda14e071425a5bd[m
Author: bartcapote <gauclee@gmail.com>
Date:   Tue Jul 14 17:40:15 2020 +0200

    Add modal with field to enter new status name

[33mcommit ddc8999e6984b816ff5bc00c66a8567b842254f0[m
Merge: 657131d 9a62b08
Author: bartcapote <61463253+bartcapote@users.noreply.github.com>
Date:   Tue Jul 14 14:46:45 2020 +0200

    Merge pull request #3 from CodecoolGlobal/2-create-public-boards
    
    add modal box for adding new board title

[33mcommit 9a62b087f4d816c76958c07fef0f3dc305096f1a[m
Merge: 292c22a 657131d
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Tue Jul 14 14:45:57 2020 +0200

    Merge with development after adding bootstrap

[33mcommit 292c22a1e96f056aff535a999595bf86c7a70ca0[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Tue Jul 14 14:41:42 2020 +0200

    add modal box for adding new board title

[33mcommit 657131d8a9331db45bb072e3518c22d90092ee07[m
Merge: bab2b42 16da864
Author: DanielRzeszutko <61314994+DanielRzeszutko@users.noreply.github.com>
Date:   Tue Jul 14 14:26:11 2020 +0200

    Merge pull request #2 from CodecoolGlobal/Navbar-and-footer
    
    Add navbar and logo

[33mcommit bab2b42d66f9aa513f8fe43f45e3419f9462012a[m
Merge: 8f90857 b72824a
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Tue Jul 14 14:24:26 2020 +0200

    Merge pull request #1 from CodecoolGlobal/1-6-boards-list-overview-and-4-default-columns
    
    Add functions to display boards and statuses columns that are assigne…

[33mcommit b72824ac8871e4cd01ed9b5b2b155bd5d555f60d[m[33m ([m[1;31morigin/1-6-boards-list-overview-and-4-default-columns[m[33m)[m
Merge: 89d2311 8f90857
Author: kasia-gra <61469195+kasia-gra@users.noreply.github.com>
Date:   Tue Jul 14 14:23:33 2020 +0200

    Merge branch 'development' into 1-6-boards-list-overview-and-4-default-columns

[33mcommit 89d2311d874d7e558e75a2f4ad9be12bdcac52f6[m[33m ([m[1;32m1-6-boards-list-overview-and-4-default-columns[m[33m)[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Tue Jul 14 12:41:04 2020 +0200

    Add functions to display boards and statuses columns that are assigned to them - based on design.html

[33mcommit 16da864e0f408c174b71a1f14553ea26e2917c19[m[33m ([m[1;31morigin/Navbar-and-footer[m[33m)[m
Author: DanielRzeszutko <daniel.rzeszutko0@gmail.com>
Date:   Tue Jul 14 12:29:06 2020 +0200

    Add navbar and logo

[33mcommit 8f908579bd30b6ca58da652c5cb48b60140627d7[m
Author: bartcapote <gauclee@gmail.com>
Date:   Mon Jul 13 19:37:33 2020 +0200

    Fix relative paths in persistence.py

[33mcommit fa7b48f5577aa96ae74f9ca08e5a3facd092f9a8[m
Author: kasia-gra <grabowska.kat@gmail.com>
Date:   Mon Jul 13 12:04:04 2020 +0200

    add data manager folter top set up connection with postgres bd

[33mcommit 9f06d859f3fed866b2a5799baa36d4133fe08137[m
Merge: 28cdc76 1abf344
Author: bartcapote <gauclee@gmail.com>
Date:   Mon Jul 13 11:55:22 2020 +0200

    Merge branch 'development' of https://github.com/CodecoolGlobal/proman-1-python-bartcapote into development

[33mcommit 28cdc763d4a5d5e1a6b25b4a538f46b3a264a0fa[m
Author: appuser <appuser@journey2-5bd78974df-rsgxc>
Date:   Mon Jul 13 09:37:02 2020 +0000

    starter project

[33mcommit 1abf34438cc55c965651f7f1d18c3e6995766667[m[33m ([m[1;31morigin/master[m[33m)[m
Author: appuser <appuser@journey2-5bd78974df-rsgxc>
Date:   Mon Jul 13 09:37:02 2020 +0000

    starter project
