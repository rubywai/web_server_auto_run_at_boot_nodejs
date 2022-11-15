const express = require('express');
const subProcess = require('child_process')
const app = express();
const command = '../../besu-21.10.6/bin/./besu --data-path=../../besu_server/node1/data --genesis-file=../../besu_server/genesis.json --network-id 123 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-host=0.0.0.0 --min-gas-price=0';
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
