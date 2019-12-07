var sha256 = require('js-sha256');
var bignum = require('bignum');
const lnService = require('ln-service');

// parent create a random hash

// rand = sha256(Math.random().toString(2))
// r = bignum(rand, 16)

init_hash = bignum('2bdb55e8376b8857bba7f8b9aa1bab0a0c4f1212944fa584308d37f563521141', 16)

// Question template: 0, 1, 2 or 3, only 2 bits/answer.
good_answers = [3, 0, 1, 3]

init_to_answer = (response, hash) => {
    calculated_hash = hash

    for (var i = 0; i < response.length; i++) {
        // console.log(myStringArray[i]);
        calculated_hash = calculated_hash.xor(bignum(response[i]).shiftLeft(i * 2))        
        console.log(calculated_hash)
    }

    return calculated_hash
}

preimage = init_to_answer(good_answers, init_hash)

console.log(init_hash.toString(16));
console.log(preimage.toString(16));

const lnd_alice = lnService.authenticatedLndGrpc({
    cert: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUIyRENDQVg2Z0F3SUJBZ0lSQU12NkNVd011aEdrd1pZaFR1SzBpMzB3Q2dZSUtvWkl6ajBFQXdJd01URWYKTUIwR0ExVUVDaE1XYkc1a0lHRjFkRzluWlc1bGNtRjBaV1FnWTJWeWRERU9NQXdHQTFVRUF4TUZZV3hwWTJVdwpIaGNOTVRreE1qQTJNVGN4TlRNMldoY05NakV3TVRNd01UY3hOVE0yV2pBeE1SOHdIUVlEVlFRS0V4WnNibVFnCllYVjBiMmRsYm1WeVlYUmxaQ0JqWlhKME1RNHdEQVlEVlFRREV3VmhiR2xqWlRCWk1CTUdCeXFHU000OUFnRUcKQ0NxR1NNNDlBd0VIQTBJQUJQRjJxTEozQWdMQTlXWk9OM0FVZ0hmM0F1YnVZWHpVMGxFQlFGRFJUbU81VkV3WgpIdmhCVkFlenEvbGpEL2o3OVViU08xZWhVTzM1amtNZjZHcHZmVG1qZHpCMU1BNEdBMVVkRHdFQi93UUVBd0lDCnBEQVBCZ05WSFJNQkFmOEVCVEFEQVFIL01GSUdBMVVkRVFSTE1FbUNCV0ZzYVdObGdnbHNiMk5oYkdodmMzU0MKQldGc2FXTmxnZ1IxYm1sNGdncDFibWw0Y0dGamEyVjBod1IvQUFBQmh4QUFBQUFBQUFBQUFBQUFBQUFBQUFBQgpod1NzRWdBRk1Bb0dDQ3FHU000OUJBTUNBMGdBTUVVQ0lRRG45bjZYUXErWmRjdkhVVFFOWEF0elhqTXg0R2tTClJnN0NIdExIemd6eG5BSWdJbTY5TDR6ZGk4UW5icFY1UmppVlB5THJ4ckMzd0Rvb0J5cERnNVRobks0PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==',
    macaroon: 'AgEDbG5kAs8BAwoQpfpTnPOWnbEr4YgELoU1ixIBMBoWCgdhZGRyZXNzEgRyZWFkEgV3cml0ZRoTCgRpbmZvEgRyZWFkEgV3cml0ZRoXCghpbnZvaWNlcxIEcmVhZBIFd3JpdGUaFgoHbWVzc2FnZRIEcmVhZBIFd3JpdGUaFwoIb2ZmY2hhaW4SBHJlYWQSBXdyaXRlGhYKB29uY2hhaW4SBHJlYWQSBXdyaXRlGhQKBXBlZXJzEgRyZWFkEgV3cml0ZRoSCgZzaWduZXISCGdlbmVyYXRlAAAGIFsXs+ItSnYWQvIBtGEVI/TGpkVF7hsFNsJYvSYNpoCq',
    socket: '127.0.0.1:10001',
});

const lnd_bob = lnService.authenticatedLndGrpc({
    cert: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUIwRENDQVhXZ0F3SUJBZ0lRVDRPOGkyWW1BQ2dCUmJzemloL2tuakFLQmdncWhrak9QUVFEQWpBdk1SOHcKSFFZRFZRUUtFeFpzYm1RZ1lYVjBiMmRsYm1WeVlYUmxaQ0JqWlhKME1Rd3dDZ1lEVlFRREV3TmliMkl3SGhjTgpNVGt4TWpBMk1UY3hOVE0xV2hjTk1qRXdNVE13TVRjeE5UTTFXakF2TVI4d0hRWURWUVFLRXhac2JtUWdZWFYwCmIyZGxibVZ5WVhSbFpDQmpaWEowTVF3d0NnWURWUVFERXdOaWIySXdXVEFUQmdjcWhrak9QUUlCQmdncWhrak8KUFFNQkJ3TkNBQVNOcEk1UGt2OHk4cXV4OHlMcHpsZjJEN1JvMmhPVWs2VWpCSE1MQzkzbEU3dXZFbVBsYTZUSAo0azFwV0Fpa29rWUprejNmU0VVSFNNQWxJYXd6ak4vSW8zTXdjVEFPQmdOVkhROEJBZjhFQkFNQ0FxUXdEd1lEClZSMFRBUUgvQkFVd0F3RUIvekJPQmdOVkhSRUVSekJGZ2dOaWIyS0NDV3h2WTJGc2FHOXpkSUlEWW05aWdnUjEKYm1sNGdncDFibWw0Y0dGamEyVjBod1IvQUFBQmh4QUFBQUFBQUFBQUFBQUFBQUFBQUFBQmh3U3NFZ0FETUFvRwpDQ3FHU000OUJBTUNBMGtBTUVZQ0lRRFJJYXZBeEJzZFdCZjJHV2dOd3p2UEh1R2MrUTh1K0p6Q1pqamZpMS9ZCitBSWhBT1Y4cnR4MHUvbVkyQStPMVhiR3J3WXV6NFV5SU1GUEtKZGt6R0UrV2E2KwotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==',
    macaroon: 'AgEDbG5kAs8BAwoQpqXb+zJHAJtS3gM+O+N+tRIBMBoWCgdhZGRyZXNzEgRyZWFkEgV3cml0ZRoTCgRpbmZvEgRyZWFkEgV3cml0ZRoXCghpbnZvaWNlcxIEcmVhZBIFd3JpdGUaFgoHbWVzc2FnZRIEcmVhZBIFd3JpdGUaFwoIb2ZmY2hhaW4SBHJlYWQSBXdyaXRlGhYKB29uY2hhaW4SBHJlYWQSBXdyaXRlGhQKBXBlZXJzEgRyZWFkEgV3cml0ZRoSCgZzaWduZXISCGdlbmVyYXRlAAAGIFRCUdc2hY1qFfHZzUtfUeVH0RMGjeckc0jcEkWLe5ea',
    socket: '127.0.0.1:10002',
});

(async () => { 

    const report_balance = async () => {
        let balance_alice =  await lnService.getChannelBalance({lnd: lnd_alice.lnd})
        let balance_bob =  await lnService.getChannelBalance({lnd: lnd_bob.lnd})
        console.log("balance of Alice: " + balance_alice.channel_balance)
        console.log("balance of Bob: " + balance_bob.channel_balance)
    }    

    try {
        const wallet_alice = await lnService.getWalletInfo({lnd: lnd_alice.lnd})
        const bob_wallet = await lnService.getWalletInfo({lnd: lnd_bob.lnd})
        
        await lnService.addPeer({lnd: lnd_alice.lnd, socket: "172.18.0.3:9735", public_key: bob_wallet.public_key})

        // const chainBalance = (await lnService.getChainBalance({lnd: lnd_alice.lnd})).chain_balance
        const {channels} = await lnService.getChannels({lnd: lnd_alice.lnd})
        const {pending_channels} = (await lnService.getPendingChannels({lnd: lnd_alice.lnd}))
        
        if (channels.length == 0 && pending_channels.length == 0) {
            await lnService.openChannel({lnd: lnd_alice.lnd, local_tokens: 500000, partner_public_key: bob_wallet.public_key});
        }

        report_balance()

        const invoice = await lnService.createInvoice({lnd: lnd_bob.lnd, tokens: 1000});
        console.log(invoice)

        await lnService.pay({lnd: lnd_alice.lnd, request: invoice.request})

        await new Promise(resolve => setTimeout(resolve, 1000));

        report_balance()


    } catch (e) {
        console.log(e);
    }
})();

// const invoice = await createInvoice({lnd});