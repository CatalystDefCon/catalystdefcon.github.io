jQuery(function($, undefined) {
    $('body').terminal(function(command, term) {
        if (command === 'help') {
            return term.error('All is lost');
        }

        if (command === 'where') {
            return term.error('Find us on the Penthouse Level in the Bally\'s');
        }

        if (command === 'why') {
            return term.error('Because terminal websites are just cheesy enough for us');
        }

        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
    }, {
    greetings: 'Microsoft @ DEF CON 23 // Come find us',
    name: 'terminal',
    height: 500,
    prompt: 'js> '});
});