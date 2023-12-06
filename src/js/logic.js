    /*
    /// @author: Hendrik Haustein
    /// @web: https://haustein.in
    /// @date: 06.12.2023
    /// @description: The logic for my random quote machine. It's a challenge from the freecodecamp.org.
    */


    // all the quotes / citations ...
        const q = [
            ["Friedrich Nietzsche", "Dem guten Frager ist schon halb geantwortet."],
            ["Friedrich Nietzsche", "Neue Wege entstehen, indem wir sie gehen."],
            ["Ludwig Reiners", "Die Hauptwörterei ist eine geistige Ermüdungserscheinung. Die Menschen sehen die Welt nicht mehr in Bewegung, sondern in Erstarrung."],
            ["Ludwig Reiners", "Lehrsätze reden, Beispiele sprechen."],
            ["Mark Aurel", "Das Glück deines Lebens hängt ab von der Beschaffenheit deiner Gedanken."],
            ["Helen Keller", "Wenn sich eine Tür schließt, öffnet sich eine andere; aber wir sehen meist so lange mit Bedauern auf die geschlossene Tür, dass wir die, die sich für uns geöffnet hat, nicht sehen."],        
            ["Gegner vom Staatsmann Gladstone", "Dass er beim Spiel das Trumpf-As aus dem Ärmel zu ziehen pflegt, das will ich ihm verzeihen. Aber dass er immer behauptet, der liebe Gott habe es ihm persönlich hineingesteck, das ist unerträglich."],
            ["Konrad Adenauer", "Was Kümmert mich mein Geschwätz von gestern?"],
            ["Sigmund Freud", "Bevor du dir eine Depression oder ein geringes Selbstwertgefühl diagnostizierst, mache dir erst einmal klar, dass du in Wirklichkeit nicht nur von Arschlöchern umgeben bist."],
            ["Helen Keller", "Everthing has it wonders, even darkness and silence, and I learn, whatever state I may be in, therein to be content."],
            ["John Allston", "If you don't control your mind, someone else will."],
            ["Unbekannt", "Nichts von irgendwelchem Wert entsteht ohne Schmerz."],
            ["Albert Einstein", "Wenn du es einem Sechsjährigen nicht erklären kannst, dann hast du es nicht verstanden."],
            ["Meister Yoda", "Tue es oder tue es nicht. Es gibt kein Versuchen."],
            ["Otto von Bismarck", "Man kann Vorsicht Furcht, man kann Mut Leichtfertigkeit nennen."],
            ["Otto von Bismarck", "Es ist rhetorische Gewohnheit, sich die Rede des Gegners so zurechtzulegen, wie man sie besser verwerten kann."],
            ["Otto von Bismarck", "Es wird niemals soviel gelogen wie vor der Wahl, während des Krieges und nach der Jagd."],
            ["Dietrich Bonhoeffer", "Jeder neue Morgen ist ein neuer Anfang unseres Lebens. Jeder Tag ist ein abgeschlossenes Ganzes."],
            ["Dietrich Bonhoeffer", "Man muss sich durch die kleinen Gedanken, die einen ärgern, immer wieder hindurchfinden zu den grossen Gedanken, die einen stärken."],
            ["Johann W. von Goethe", "Was immer du tun kannst oder träumst es zu können, fang damit an."],
            ["Olin Miller", "Wenn Du willst, dass Dir eine leichte Aufgabe richtig schwer erscheint, schieb sie einfach auf."],
            ["Martin Luther", "Wie schnell sich “nicht jetzt” in “niemals” verwandelt."],
            ["Muhammad Ali", "Don’t count the days; make the days count."],
            ["Steve Jobs", "Your time is limited, so don’t waste it living someone else’s life."],
            ["Abraham Lincoln", "The best way to predict your future is to create it."],
            ["Steve Jobs", "The only way to do great work is to love what you do."],
            ["Winston Churchill", "Success is not final, failure is not fatal: It is the courage to continue that counts."]
        ];

    // all the aviable colors
        const c = [
            ["bg-red-300"],
            ["bg-red-500"],
            ["bg-red-600"],
            ["bg-yellow-300"],
            ["bg-yellow-500"],
            ["bg-yellow-600"],
            ["bg-green-300"],
            ["bg-green-500"],
            ["bg-green-600"],
            ["bg-organe-300"],
            ["bg-organe-500"],
            ["bg-organe-600"],
            ["bg-teal-300"],
            ["bg-teal-500"],
            ["bg-teal-700"],
            ["bg-pink-400"],
            ["bg-pink-500"],
            ["bg-pink-700"],
            ["bg-indigo-300"],
            ["bg-indigo-400"],
            ["bg-indigo-600"],
            ["bg-blue-400"],
            ["bg-blue-600"],
            ["bg-purple-300"],
            ["bg-purple-600"],
            ["bg-purple-700"]
        ];

    // jquery ...
        $(document).ready(function(){

        const txtAr = $("#txtIn");
        const autNmn = $("#authorName");
        const btnQuo = $("#new-quote");
        const twQuo = $("#tweet-quote");

        const quoTag = $("#quoteTag");
        const addTag = $("#addTag");

        const bdy = $("body");

    /*
    /// @description: This function will calc the random quote.
    /// @param: parameter will got the "q" array. which within holds all the citations.
    */
        function rndQuo(para) {

            const x = Math.floor(Math.random() * para.length);
            
            quoTag.fadeIn();

            txtAr.text( q[x][1]).fadeIn();
            
            addTag.fadeIn();

            autNmn.text( q[x][0]).fadeIn();

            const aut = q[x][0];

            twQuo.attr("href", "https://twitter.com/intent/tweet?text=Zitat%20von%20" + aut.replace(/\s/g, "%20")+ "%20@%20&url=haustein.in");
        };
        
        rndQuo(q);

    /*
    /// @description: This function will calc the random background color.
    /// @: bdy.addClass(c[x]) -> c[] holds all the different colors for the background..
    */    
        function bgColor() {
            
            bdy.removeClass();

            const x = Math.floor(Math.random() * c.length);

            bdy.addClass(c[x]);
        }
        
        btnQuo.on("click", function() 
        {
                quoTag.fadeOut("slow", function() {});
                txtAr.fadeOut("slow", function() {});
                addTag.fadeOut("slow", function() {});
                autNmn.fadeOut("slow", function() {

                    rndQuo(q);
                    bgColor();

                });
        });
    })
