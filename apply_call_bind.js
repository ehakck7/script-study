const naming = new _naming
function _naming(){}

_naming.prototype.realnaming = function(){
	const info1 = {
		name : 'kim',
		actionInfo: function(){
			console.log(this.name)
		}
	}
	const info2 = {
		name : 'dong'
	}
	const info3 = {
		name : 'hyun'
	}
	
	info1.actionInfo()
	info1.actionInfo.call(info2)
	info1.actionInfo.apply(info2)
	const actionInfo2 = info1.actionInfo.bind(info3)
	actionInfo2()
}

naming.realnaming()
