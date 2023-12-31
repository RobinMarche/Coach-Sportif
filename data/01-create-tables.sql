BEGIN;

DROP TABLE IF EXISTS "programme";

CREATE TABLE "programme"(
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

COMMIT;

BEGIN;

INSERT INTO "programme" ("id", "name", "description", "photo") VALUES
(1, 'Entrainement à Domicile', 'Il est déjà de notoriété publique que le sport en général agit positivement sur tes fonctions vitales, comme de nombreuses études le prouvent. Ainsi, cela améliore ta pression artérielle, ton pouls, le fonctionnement de ton système cardiovasculaire, prévient le surpoids, et bien d autres choses encore. Tu peux bénéficier de ces avantages en t entraînant intensivement et régulièrement', 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(2, 'Renforcement / Developpement', 'Le développement et le perfectionnement global de vos aptitudes physiques et motrices permettent d améliorer votre comportement et vos performances quel que soit le domaine pour toute activité sportive. C est un programme individuel, préparé par nos soins en fonction de vos objectifs.', 'https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(3, 'Entrainement en exterieur', 'faire du sport en plein air est peut-être la solution idéale, surtout au printemps et en été. En plus d être divertissant, c est un nouveau défi sportif qui, selon les scientifiques, aurait également des avantages pour la santé.  Si tu t entraînes à l air libre et que tu fais de la pelouse du parc ta salle de sport, tu peux faire le plein de vitamine D et ainsi améliorer non seulement tes performances, mais aussi ton humeur. Ton système immunitaire bénéficie également de cette « vitamine du soleil ». Faire du sport dans un environnement naturel t aide non seulement à booster ta confiance en toi, mais peut également avoir des effets pédagogiques en termes d interaction sociale.', 'https://images.pexels.com/photos/601177/pexels-photo-601177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(4, 'Programme pour entreprise','L objectif de ce type d entraînement est une mise en condition physique rapide tout en renforçant la cohésion du groupe. Une séance se déroule sur une base de footing ponctué de simples exercices de course (accélérations, sprints) et de renforcement musculaire (pompes, squats, abdos). Les exercices (individuels ou collectifs) sont uniques ou enchaînés et réalisés sous forme de défis. Une séance dure entre 1h30 et 2h30, parfois plus, et se déroule en extérieur (ville, parc, forêt, campagne, plage…), en groupe et est encadrée par notre coach. Ce dernier donne des instructions de façon très directive, poussant les participants à donner leur maximum et les encourageant à dépasser leurs limites mais toujours dans un cadre sécuritaire et convivial. L effet de groupe a cette capacité de pousser les participants à se donner plus que lors d un entraînenement seul dans son coin.', 'https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(5, 'Programme Scolaire', 'Pour les plus jeunes, de 5 à 12ans, l éducation physique permet l acquisition d automatismes indispensables à la motricité de tout être humain. Le programme se présente sous la forme de 3 cycles de 10 séances, organisés et validés par l Éducation Nationale. Ces cycles peuvent se réaliser individuellement, à lécole primaire ou en club/association sportive', 'https://images.pexels.com/photos/8813526/pexels-photo-8813526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(6, 'Programme Senior', 'L entretien de ces bases à travers le temps, pour garder vitalité, forme et dextérité. Il s agit d un programme individuel préparé en fonction des exigences et des besoins physiques que vous souhaitez entretenir ou reconquérir.', 'https://images.pexels.com/photos/5067733/pexels-photo-5067733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');


COMMIT;