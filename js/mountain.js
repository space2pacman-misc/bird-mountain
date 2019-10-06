class Mountain {
	constructor(map) {
		this._map = map;
		this._marker = "^";
		this._height = 1;
		this._environment = " ";
	}

	build() {
		if(!this.findMarker()) return false;

		for(var i = 0; i < this._map.length; i++) {
			for(var j = 0; j < this._map[i].length; j++) {
				if(this._map[i][j] === this._marker) {
					if(!this._map[i - 1]) {
						this._map[i][j] = this._height;
					}
					if(!this._map[i + 1]) {
						this._map[i][j] = this._height;
					}
					if(!this._map[i][j + 1]) {
						this._map[i][j] = this._height;
					}
					if(!this._map[i][j - 1]) {
						this._map[i][j] = this._height;
					}
					if(this._map[i - 1] && this._map[i - 1][j] === this._environment) {
						this._map[i][j] = this._height;
					}
					if(this._map[i + 1] && this._map[i + 1][j] === this._environment) {
						this._map[i][j] = this._height;
					}
					if(this._map[i][j - 1] && this._map[i][j - 1] === this._environment) {
						this._map[i][j] = this._height;
					}
					if(this._map[i][j + 1] && this._map[i][j + 1] === this._environment) {
						this._map[i][j] = this._height;
					}
				}
			}
		}

		this._environment = this._height;
		this._height++;
		this.build();
	}

	findMarker() {
		var marker = false;

		for(var i = 0; i < this._map.length; i++) {
			for(var j = 0; j < this._map[i].length; j++) {
				if(this._map[i][j] === this._marker) {
					marker = true;
				}
			}
		}

		return marker;
	}

	getMaxHeight() {
		return this._height - 1;
	}

	getMap() {
		return this._map;
	}
}