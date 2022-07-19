
export enum TokenType {

    // single character tokens
    PARENTHESIS_OPEN,
    PARENTHESIS_CLOSE,
    PLUS,
    MINUS,
    COMMA,
    DOT,
    COLON,
    SLASH,
    STAR,
    PERCENT,
    DOLLAR,
    HASH,

    // single or double character tokens
    EXCLAMATION_MARK,
    EXCLAMATION_MARK_EQUAL,
    EQUAL_EQUAL,
    GREATER,
    GREATER_EQUAL,
    LESS,
    LESS_EQUAL,
    PIPE_PIPE,
    AMPERSAND_AMPERSAND,

    // literals
    IDENTIFIER,
    STRING,
    NUMBER,

    // keywords
    ALWAYS,
    WHEN,
    AND,
    OR,
    NOT,

    // other
    EOF,
}

export default class Token {

    readonly type: TokenType;
    readonly lexeme: string;
    readonly position: number;

    constructor(type: TokenType, lexeme: string, position: number) {
        this.type = type;
        this.lexeme = lexeme;
        this.position = position;
    }

    toString(): string {
        return "([" + TokenType[this.type] + "] " + "'" + this.lexeme + "'" + ")";
    }
}
