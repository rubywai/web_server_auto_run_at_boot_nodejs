const express = require('express');
const subProcess = require('child_process')
const app = express();
const command = 'cd ../GBNX_ADMIN && flutter run -d web-server --web-port 1337 --web-hostname 0.0.0.0 --release --web-renderer html';
app.listen(4000, () => {
	subProcess.exec(command, (err, stdout, stderr) => {
		if (err) {
		  console.log('error is ' + err)
		} else {
		  console.log(`The stdout Buffer from shell: ${stdout.toString()}`)
		  console.log(`The stderr Buffer from shell: ${stderr.toString()}`)
		}
	  })
  console.log("server started")
})
