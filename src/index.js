const { Type } = require('@jedmud/tui-elements')

module.exports = class extends Type {
    construct() {
        this.rows = []
    }

    set(rows) {
        this.rows = rows

        return this
    }

    write() {
        this.print(this.normalize(this.rows))
    }

    normalize(rows) {
        const normalized = []

        for (let i = 0, l = rows.length; i < l; i++) {
            const wrapped = this.wrap(rows[i])

            for (let j = 0, w = wrapped.length; j < w; j++) {
                normalized.push(wrapped[j])
            }
        }

        return normalized
    }
}
