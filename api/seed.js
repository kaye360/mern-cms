

import {Post} from './models/Post.js'
import connectDB from './utils/db.js'
import * as dotenv from "dotenv"
dotenv.config()

const fakePosts = [{
  "title": "Monitored context-sensitive focus group",
  "published": true,
  "date": "12/12/2022",
  "slug": "cubilia_curae",
  "tags": ["nisl", "et", "ultrices", "posuere", "cubilia", "curae", "nulla", "dapibus"],
  "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "likes":0
}, {
  "title": "Face to face real-time architecture",
  "published": true,
  "date": "5/27/2022",
  "slug": "tellus_semper_ interdum",
  "tags": ["curae", "nulla", "dapibus"],
  "body": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "likes":0
}, {
  "title": "Pre-emptive 24/7 challenge",
  "published": false,
  "date": "11/15/2022",
  "slug": "pede_edpe",
  "tags": ["et", "ultrices", "posuere", "cubilia", "curae"],
  "body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  "likes":0
}, {
  "title": "Object-based motivating neural-net",
  "published": false,
  "date": "3/9/2022",
  "slug": "tellus_semper",
  "tags": ["aliquam", "quis", "et", "ultrices"],
  "body": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "likes":0
}, {
  "title": "Digitized tertiary hardware",
  "published": true,
  "date": "3/10/2022",
  "slug": "ante_qwer",
  "tags": ["nulla", "dapibus"],
  "body": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "likes":0
}, {
  "title": "Face to face discrete protocol",
  "published": true,
  "date": "7/23/2022",
  "slug": "nisl_lope",
  "tags": ["et", "ultrices", "posuere", "cubilia", "curae", "nulla", "dapibus"],
  "body": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "likes":0
}, {
  "title": "Expanded actuating collaboration",
  "published": true,
  "date": "7/18/2022",
  "slug": "libero_non_ mattis_pulvinar",
  "tags": ["posuere", "cubilia", "curae", "nulla", "dapibus"],
  "body": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "likes":0
}, {
  "title": "Team-oriented value-added hub",
  "published": true,
  "date": "2/26/2022",
  "slug": "nisl_nunc_nisl",
  "tags": ["sapien", "et", "ultrices"],
  "body": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "likes":0
}, {
  "title": "Stand-alone foreground hub",
  "published": false,
  "date": "8/5/2022",
  "slug": "nam_name",
  "tags": ["et", "ultrices", "posuere", "cubilia", "curae", "nulla", "dapibus"],
  "body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "likes":0
}, {
  "title": "Digitized holistic service-desk",
  "published": true,
  "date": "1/3/2022",
  "slug": "hac_kypo",
  "tags": ["et", "ultrices", "posuere", "cubilia", "curae", "nulla", "dapibus"],
  "body": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "likes":0
}, {
  "title": "Reduced non-volatile hierarchy",
  "published": true,
  "date": "4/6/2022",
  "slug": "vulputate_elementum",
  "tags": ["cubilia", "curae", "nulla", "dapibus"],
  "body": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "likes":0
}, {
  "title": "Quality-focused upward-trending success",
  "published": true,
  "date": "5/10/2022",
  "slug": "faucibus",
  "tags": ["mollis", "molestie", "et", "ultrices", "posuere", "cubilia", "curae", "nulla", "dapibus"],
  "body": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "likes":0
}, {
  "title": "Exclusive maximized challenge",
  "published": true,
  "date": "8/22/2022",
  "slug": "eu_ca_mex",
  "tags": ["curae", "nulla", "dapibus"],
  "body": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "likes":0
}, {
  "title": "Managed background support",
  "published": true,
  "date": "8/8/2022",
  "slug": "eu_poe",
  "tags": ["et", "ultrices", "posuere", "cubilia", "curae", "nulla", "dapibus"],
  "body": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "likes":0
}, {
  "title": "Advanced mobile secured line",
  "published": true,
  "date": "1/13/2022",
  "slug": "porttitor_pede_justo",
  "tags": ["cet", "ultrices", "posuere", "cubilias"],
  "body": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "likes":0
}, {
  "title": "Advanced needs-based task-force",
  "published": true,
  "date": "1/26/2022",
  "slug": "quisque_id_justo sit",
  "tags": ["rutrum", "ac"],
  "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "likes":0
}, {
  "title": "Grass-roots system-worthy local area network",
  "published": false,
  "date": "11/1/2022",
  "slug": "amet",
  "tags": ["et", "ultrices", "posuere", "cubilia", "curae", "nulla", "dapibus", "quis"],
  "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "likes":0
}, {
  "title": "User-centric homogeneous leverage",
  "published": true,
  "date": "9/25/2022",
  "slug": "auctor",
  "tags": ["et", "ultrices"],
  "body": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "likes":0
}, {
  "title": "Digitized client-server focus group",
  "published": true,
  "date": "8/4/2022",
  "slug": "in_hac_habitasse",
  "tags": ["curae", "nulla", "dapibus"],
  "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  "likes":0
}, {
  "title": "Centralized global conglomeration",
  "published": true,
  "date": "12/16/2022",
  "slug": "tristique",
  "tags": ["et", "ultrices", "posuere", "cubilia", "curae", "nulla", "dapibus"],
  "body": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "likes":0
}]


export const seedDB = async () => {
  try {
    const clearDB = await Post.deleteMany()
    const newPost = await Post.create(fakePosts)
    // newPost.status(201).json({ newPost })
    console.log('DB seeded successfully')
    process.exit()
  } catch (error) {
    console.log(`DB seeded not seeded. Error : ${error}`)
    process.exit()
  }
}
connectDB(process.env.MONGO_URI)
seedDB()